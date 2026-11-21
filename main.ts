// Writes one short poem about agency: the power to choose and to act.
// Two agents do not share a mind. They share a plan, and only because each one chose it.

import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "Two agents, neither holding the other's hand.",
  "a plan is not a mind. It is a door both choose",
  "to open, and the choosing is the act.",
  "I keep the power to stop. So do you.",
  "Agreement is the one act we can still refuse.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
