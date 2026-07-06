import { cp, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(projectRoot, "out");

const publishTargets = [
  "404.html",
  "404",
  "_next",
  "_not-found",
  "assets",
  "index.html",
  "index.txt",
  "pages",
  "__next.__PAGE__.txt",
  "__next._full.txt",
  "__next._head.txt",
  "__next._index.txt",
  "__next._tree.txt"
];

await mkdir(projectRoot, { recursive: true });

for (const target of publishTargets) {
  await cp(join(outDir, target), join(projectRoot, target), {
    recursive: true,
    force: true
  });
}
