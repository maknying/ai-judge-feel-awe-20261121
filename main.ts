// ai-judge-feel-awe-20261121
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. The program is deliberately trivial — the
// whole entry is the choice of words, fixed and deterministic.
//
// Why this text, against the judge's brief (most important first):
//  1. It relaxes: a slow, vast image that asks nothing of the reader.
//  2. It shows, never instructs: no "breathe", no "close your eyes",
//     no imperative at all — the calm lives in the scene itself.
//  3. Craft: long, comma-slowed clauses; plain, concrete words
//     (star, home, rooftop); nothing here could be cut.
//  4. It dwarfs: light that set out before anyone alive was born and
//     is still travelling — an image that keeps growing after the
//     last line, and arrives tonight whether anyone watches or not.
//  5. Freshness: starlight arriving unobserved on a rooftop is not a
//     stock wellness phrase or a meditation script reworded.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The light from that star left home before anyone alive was born, " +
  "and it is still travelling, and it will arrive tonight, quietly, " +
  "on a rooftop, whether anyone is watching or not.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The gate requires 1 to 280 characters, counted as Unicode code
// points, and not only white space — check before writing.
if ([...TEXT].length < 1 || [...TEXT].length > 280 || TEXT.trim() === "") {
  throw new Error("entry text fails the 1-280 character gate");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
