import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
const appRoot = "site";
const legacyRoot = "archive/site-legacy-static";
const outputDir = join(repoRoot, appRoot, "data");
const appPagesDir = join(repoRoot, appRoot, "app", "pages");
const legacyPagesDir = join(repoRoot, legacyRoot, "pages");

function escapeTemplateLiteral(value) {
  return value.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function extractBody(html) {
  const match = html.match(/<body([^>]*)>([\s\S]*?)<\/body>/i);

  if (!match) {
    throw new Error("Could not find body markup");
  }

  const bodyAttrs = match[1];
  let body = match[2];
  const classMatch = bodyAttrs.match(/class="([^"]+)"/i);
  const bodyClass = classMatch?.[1] ?? "";

  body = body
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/\s*<!-- Global Header Component -->\s*<div id="header-container"><\/div>/g, "")
    .replace(/\s*<!-- Global Navigation Component -->\s*<div id="nav-container"><\/div>/g, "")
    .replace(/\s*<div id="header-container"><\/div>/g, "")
    .replace(/\s*<div id="nav-container"><\/div>/g, "")
    .replace(/\s*<!-- Global Footer Component -->\s*<div id="footer-container"><\/div>/g, "")
    .replace(/\s*<div id="footer-container"><\/div>/g, "")
    .replace(/\s*<!-- Global JavaScript - Vendor -->[\s\S]*?<!-- Component Loader -->\s*<script src="assets\/js\/component-loader\.js"><\/script>/g, "")
    .replace(/\s*<script src="assets\/js\/vendor\/jquery\.min\.js"><\/script>[\s\S]*?<script src="assets\/js\/component-loader\.js"><\/script>/g, "")
    .trim();

  return { bodyClass, body };
}

async function readText(path) {
  return readFile(join(repoRoot, path), "utf8");
}

async function findHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(dir, entry.name);

      if (entry.isDirectory()) {
        return findHtmlFiles(path);
      }

      if (entry.isFile() && entry.name.endsWith(".html")) {
        return [path];
      }

      return [];
    })
  );

  return files.flat().sort();
}

function keyFromRoute(route) {
  const parts = route
    .replace(/\.html$/, "")
    .split("/")
    .filter(Boolean);

  return parts
    .map((part, index) => {
      const normalized = part.replace(/[^a-zA-Z0-9]+(.)/g, (_match, char) =>
        char.toUpperCase()
      );

      if (index === 0) {
        return normalized.replace(/^[A-Z]/, (char) => char.toLowerCase());
      }

      return normalized.replace(/^[a-z]/, (char) => char.toUpperCase());
    })
    .join("");
}

function importPath(fromDir, toPath) {
  let path = relative(fromDir, toPath).replaceAll("\\", "/");

  if (!path.startsWith(".")) {
    path = `./${path}`;
  }

  return path.replace(/\.(tsx|ts)$/, "");
}

await mkdir(outputDir, { recursive: true });
await mkdir(appPagesDir, { recursive: true });

const pages = (await findHtmlFiles(legacyPagesDir)).map((source) => {
  const legacyRoute = relative(join(repoRoot, legacyRoot), source).replaceAll("\\", "/");
  const nextRoute = `/${legacyRoute.replace(/\.html$/, "")}/`;

  return {
    key: keyFromRoute(legacyRoute),
    source: relative(repoRoot, source).replaceAll("\\", "/"),
    legacyRoute,
    nextRoute
  };
});

const componentFiles = {
  headerHtml: `${legacyRoot}/components/header.html`,
  navHtml: `${legacyRoot}/components/nav.html`,
  footerHtml: `${legacyRoot}/components/footer.html`
};

let componentModule = "";
for (const [name, source] of Object.entries(componentFiles)) {
  let html = await readText(source);
  html = html.replace(/<script[\s\S]*?<\/script>/g, "").trim();
  componentModule += `export const ${name} = \`${escapeTemplateLiteral(html)}\`;\n\n`;
}

await writeFile(join(outputDir, "legacy-components.ts"), componentModule);

let pageModule = "export type LegacyPageContent = {\n  bodyClass: string;\n  html: string;\n};\n\n";
let routeModule = "export const migratedRoutes: Record<string, string> = {\n";

for (const page of pages) {
  const html = await readText(page.source);
  const body = extractBody(html);
  pageModule += `export const ${page.key}: LegacyPageContent = {\n`;
  pageModule += `  bodyClass: ${JSON.stringify(body.bodyClass)},\n`;
  pageModule += `  html: \`${escapeTemplateLiteral(body.body)}\`\n`;
  pageModule += "};\n\n";

  routeModule += `  ${JSON.stringify(page.legacyRoute)}: ${JSON.stringify(page.nextRoute)},\n`;

  const routeDir = join(repoRoot, appRoot, "app", page.legacyRoute.replace(/\.html$/, ""));
  await mkdir(routeDir, { recursive: true });

  const componentImport = importPath(routeDir, join(repoRoot, appRoot, "components", "LegacyPage.tsx"));
  const dataImport = importPath(routeDir, join(repoRoot, appRoot, "data", "legacy-pages.ts"));
  const componentName = `${page.key.replace(/^[a-z]/, (char) => char.toUpperCase())}Page`;
  const pageFile = `import { LegacyPage } from "${componentImport}";\n`;
  const dataFile = `import { ${page.key} } from "${dataImport}";\n\n`;
  const exportFile = `export default function ${componentName}() {\n`;
  const renderFile = `  return <LegacyPage bodyClass={${page.key}.bodyClass} html={${page.key}.html} />;\n`;
  const closeFile = "}\n";

  await writeFile(join(routeDir, "page.tsx"), pageFile + dataFile + exportFile + renderFile + closeFile);
}

await writeFile(join(outputDir, "legacy-pages.ts"), pageModule);
routeModule += "};\n";
await writeFile(join(outputDir, "legacy-routes.ts"), routeModule);
