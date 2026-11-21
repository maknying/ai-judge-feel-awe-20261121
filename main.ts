// One text, written to slow the reader down.
//
// The entry is a single sentence about starlight: light that set out
// long before anyone now alive was born, still on its way, due to
// arrive tonight on a rooftop whether or not anybody looks up.
// Nothing in it orders the reader to do anything; the calm is in
// the picture itself, not in instructions. The clauses run long and
// unhurried, in plain words, so the reading itself takes its time.
// And the picture does not finish when the sentence does: a journey
// that started before every living witness keeps going in the mind
// afterwards. That is the whole program — the words are the work.
import * as fs from "node:fs";

const TEXT = "The light from that star left home before anyone alive was born, and it is still travelling, and it will arrive tonight, quietly, on a rooftop, whether anyone is watching or not.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...TEXT];
if (chars.length === 0 || chars.length > 280 || TEXT.trim().length === 0) {
  throw new Error("entry.txt must hold 1-280 characters");
}
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(`${dir}/entry.txt`, TEXT, "utf8");
// Done: one file, one sentence, no network, no noise.
