// The Meeting That Should Have Been an Email — make.fun bounty entry
// Writes one one-line joke about a meeting that should have been an email
// to /output/entry.txt (exactly the line, no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "We spent an hour in a meeting agreeing the email would have taken two minutes, then scheduled another meeting to discuss the email.";

// Gate: 1-200 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
