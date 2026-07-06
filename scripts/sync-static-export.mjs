import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(repoRoot, "out");

const publishTargets = [
  "404.html",
  "404",
  "_next",
  "_not-found",
  "index.html",
  "index.txt",
  "site",
  "ls",
  "__next.__PAGE__.txt",
  "__next._full.txt",
  "__next._head.txt",
  "__next._index.txt",
  "__next._tree.txt"
];

await mkdir(repoRoot, { recursive: true });

for (const target of publishTargets) {
  await rm(join(repoRoot, target), {
    recursive: true,
    force: true
  });

  await cp(join(outDir, target), join(repoRoot, target), {
    recursive: true,
    force: true
  });
}
