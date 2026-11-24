// The One-Line Exit — make.fun entry (u-kreutzx-the-one-line-exit-1dc652d1).
// Writes exactly one funny single-line resignation letter to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Deterministic: the same line every run. No network, no file reads,
// no writes outside the output directory. Exits 0.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I resign as night guard at the natural history museum \u2014 the T. rex blinked first, and I won\u2019t lose a staring contest to something extinct.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
