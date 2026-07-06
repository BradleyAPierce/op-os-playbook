import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const port = process.env.SITE_PORT || "8000";
const url = `http://localhost:${port}/site/pages/index.html`;

console.log("Serving op-os-playbook from repo root");
console.log(`Site entrance: ${url}`);
console.log(`Site home:     http://localhost:${port}/site/index.html`);
console.log("Press Ctrl+C to stop.\n");

const server = spawn("python3", ["-m", "http.server", port], {
  cwd: repoRoot,
  stdio: "inherit"
});

server.on("exit", (code) => {
  process.exit(code ?? 0);
});
