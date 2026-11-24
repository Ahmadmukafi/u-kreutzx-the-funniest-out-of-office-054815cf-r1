import { writeFileSync, mkdirSync } from "node:fs";

const line =
  "Out of office: my inbox is currently handled by a cat. She has no thumbs and even less patience.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Gate: the entry must be a single line of 1-140 chars.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry is ${line.length} chars, gate needs 1-140`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
