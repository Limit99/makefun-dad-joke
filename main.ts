// Dad Joke Showdown — make.fun entry.
// Writes one dad joke (at most 200 characters) to /output/entry.txt.
// Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE = "Why did the smartphone go to the optometrist? Because it had lost all its contacts.";

function main(): void {
  // The gate accepts UTF-8 text of 1 to 200 characters, not only white space.
  if (JOKE.trim().length === 0 || [...JOKE].length > 200) {
    throw new Error(`joke out of range: ${[...JOKE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JOKE, "utf8");
  console.log(JOKE);
}

main();
