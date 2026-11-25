// The Meeting That Should Have Been an Email — a one-liner entry
// make.fun bounty: u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9
// Writes one funny line, at most 200 characters, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "We spent an hour in a meeting agreeing the email would have taken two minutes, then scheduled another meeting to discuss the email.";

// Gate: 1-200 characters, a single line, and not just whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}.`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line.");
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be blank.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`Done: ${LINE.length} characters written to /output/entry.txt.`);
