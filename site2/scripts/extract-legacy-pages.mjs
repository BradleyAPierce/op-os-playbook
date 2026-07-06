import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
const outputDir = join(repoRoot, "site2", "data");

const pages = [
  {
    key: "portfolioIndex",
    source: "site/pages/index.html"
  },
  {
    key: "deviceManagement",
    source: "site/pages/core/cloud/device-management.html"
  },
  {
    key: "layeredSecurity",
    source: "site/pages/data-document-security/layered-security.html"
  }
];

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

await mkdir(outputDir, { recursive: true });

const componentFiles = {
  headerHtml: "site/components/header.html",
  navHtml: "site/components/nav.html",
  footerHtml: "site/components/footer.html"
};

let componentModule = "";
for (const [name, source] of Object.entries(componentFiles)) {
  let html = await readText(source);
  html = html.replace(/<script[\s\S]*?<\/script>/g, "").trim();
  componentModule += `export const ${name} = \`${escapeTemplateLiteral(html)}\`;\n\n`;
}

await writeFile(join(outputDir, "legacy-components.ts"), componentModule);

let pageModule = "export type LegacyPageContent = {\n  bodyClass: string;\n  html: string;\n};\n\n";

for (const page of pages) {
  const html = await readText(page.source);
  const body = extractBody(html);
  pageModule += `export const ${page.key}: LegacyPageContent = {\n`;
  pageModule += `  bodyClass: ${JSON.stringify(body.bodyClass)},\n`;
  pageModule += `  html: \`${escapeTemplateLiteral(body.body)}\`\n`;
  pageModule += "};\n\n";
}

await writeFile(join(outputDir, "legacy-pages.ts"), pageModule);
