import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const siteRoot = join(repoRoot, "site");
const port = process.env.SITE_PORT || "3001";
const url = `http://localhost:${port}`;

console.log("Starting MKM Solutions Next.js site");
console.log(`Site home: ${url}`);
console.log("Press Ctrl+C to stop.\n");

const server = spawn("npm", ["run", "dev", "--", "--port", port], {
  cwd: siteRoot,
  stdio: "inherit"
});

server.on("exit", (code) => {
  process.exit(code ?? 0);
});
