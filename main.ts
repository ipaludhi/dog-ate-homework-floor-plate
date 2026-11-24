// The Dog Ate My Homework: Funniest Excuse — entry program (Node 22, stdlib only).
// Writes one original one-line excuse, in the dog's own voice, to /output/entry.txt.
// The excuse: under dog law, anything on the floor is a plate, and plates are for eating.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const EXCUSE =
  'It was on the floor, so under dog law it was a plate, and plates are for eating.';

// Writes exactly the excuse, no trailing newline: the gate counts characters
// (1-200), so the file is 80 characters / 80 bytes, byte-identical every run.
// Self-check mirrors the sealed gate (1-200 chars, not whitespace only) so a
// bad edit fails loudly here instead of silently in the grader's sandbox.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}
if (EXCUSE.trim().length === 0) {
  throw new Error('excuse must not be whitespace only');
}
writeFileSync(join(outDir, 'entry.txt'), EXCUSE, 'utf8');
