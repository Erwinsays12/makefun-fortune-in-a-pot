// Fortune in a Pot — a kind, funny fortune for the houseplant on the windowsill.
// Writes exactly one line (110 characters) to /output/entry.txt.
// Deterministic: no input, no clock, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your future holds long sunbeams, a full watering can, and a keeper who says sorry before every little haircut.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
