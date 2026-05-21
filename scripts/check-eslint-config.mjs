#!/usr/bin/env node
// DO NOT DELETE THIS FILE
import { existsSync } from "node:fs";

const CONFIGS = [
  "eslint.config.mjs",
  "eslint.config.js",
  "eslint.config.cjs",
  ".eslintrc.js",
  ".eslintrc.cjs",
  ".eslintrc.json",
  ".eslintrc",
];

if (!CONFIGS.some((c) => existsSync(c))) {
  process.stderr.write("\n❌ Oops! No ESLint config file detected.\n");
  process.stderr.write(
    "   Please configure ESLint as described in the task description.\n\n"
  );
  process.exit(1);
}
