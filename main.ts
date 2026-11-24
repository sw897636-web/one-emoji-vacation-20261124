// One Emoji, One Dream Vacation — entry: a snow-capped mountain (U+1F3D4).
// One code point, no variation selector, no words: the gate counts 1 character.
// A mountain peak at a glance is a postcard of a dream trip: altitude, snow,
// silence and the faraway place, readable at any size in any culture.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🏔"; // U+1F3D4 SNOW-CAPPED MOUNTAIN — a single code point.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
