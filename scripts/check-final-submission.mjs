#!/usr/bin/env node
// DO NOT DELETE THIS FILE

import { existsSync, readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

let passed = 0;
let failed = 0;

function check(label, fn) {
  try {
    const result = fn();
    if (result === false) {
      process.stderr.write(`  ❌ ${label}\n`);
      failed++;
    } else {
      process.stdout.write(`  ✅ ${label}\n`);
      passed++;
    }
  } catch {
    process.stderr.write(`  ❌ ${label}\n`);
    failed++;
  }
}

function run(bin, args) {
  const result = spawnSync(bin, args, { stdio: "inherit" });
  if (result.status !== 0) throw new Error();
}

process.stdout.write("\n📋 Running final submission audit...\n");

// ─── 1. Required packages ────────────────────────────────────────────────────
let allDeps = {};
try {
  const pkg = JSON.parse(readFileSync("package.json", "utf-8"));
  allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
} catch {
  process.stderr.write("\n❌ package.json not found or invalid.\n");
  process.exit(1);
}

const REQUIRED = [
  ["typescript", "TypeScript"],
  ["@tanstack/react-query", "TanStack React Query"],
  ["axios", "Axios"],
  ["@reduxjs/toolkit", "Redux Toolkit"],
  ["react-hook-form", "react-hook-form"],
  ["zod", "Zod"],
  ["next-intl", "next-intl"],
  ["sass", "Sass/SCSS"],
  ["husky", "Husky"],
];

process.stdout.write("\n📦 Required packages\n");
for (const [dep, label] of REQUIRED) {
  check(`${label} installed`, () => dep in allDeps);
}
check("TanStack React Query is v5", () => {
  const v = allDeps["@tanstack/react-query"];
  if (!v) return false;
  return parseInt(v.replace(/[^0-9]/, "").split(".")[0]) === 5;
});

// ─── 2. TypeScript strict mode ───────────────────────────────────────────────
process.stdout.write("\n⚙️  TypeScript config\n");
check("strict mode enabled", () => {
  const tsconfig = JSON.parse(readFileSync("tsconfig.json", "utf-8"));
  return tsconfig.compilerOptions?.strict === true;
});

// ─── 3. ESLint config ────────────────────────────────────────────────────────
process.stdout.write("\n🔍 ESLint\n");
const ESLINT_CONFIGS = [
  "eslint.config.mjs",
  "eslint.config.js",
  "eslint.config.cjs",
  ".eslintrc.js",
  ".eslintrc.cjs",
  ".eslintrc.json",
  ".eslintrc",
];
check("ESLint config file exists", () => ESLINT_CONFIGS.some(existsSync));

// ─── 4. FSD structure ────────────────────────────────────────────────────────
process.stdout.write("\n🏗️  FSD structure\n");
for (const dir of [
  "src/app",
  "src/screens",
  "src/widgets",
  "src/features",
  "src/entities",
  "src/shared",
]) {
  check(`${dir}/`, () => existsSync(dir));
}

// ─── 5. Localization ─────────────────────────────────────────────────────────
process.stdout.write("\n🌐 Localization\n");
check("messages/ru.json exists", () => existsSync("messages/ru.json"));
check("messages/kk.json exists", () => existsSync("messages/kk.json"));

// ─── 6. ESLint (full project) ────────────────────────────────────────────────
process.stdout.write("\n🧹 ESLint — full project\n");
check("no lint errors or warnings", () => {
  run("npx", ["eslint", ".", "--max-warnings", "0"]);
});

// ─── 7. TypeScript (full project) ────────────────────────────────────────────
process.stdout.write("\n🔷 TypeScript — full project\n");
check("no type errors", () => {
  run("npx", ["tsc", "--noEmit"]);
});

// ─── 8. Production build ─────────────────────────────────────────────────────
process.stdout.write("\n🏗️  Production build\n");
check("build succeeds", () => {
  run("npm", ["run", "build"]);
});

// ─── Summary ─────────────────────────────────────────────────────────────────
process.stdout.write("\n" + "─".repeat(50) + "\n");
if (failed === 0) {
  process.stdout.write(`\n✅ All ${passed} checks passed! Great work! 🎉\n\n`);
  process.exit(0);
} else {
  process.stderr.write(`\n❌ ${failed} check(s) failed, ${passed} passed.\n`);
  process.stderr.write("   Fix the issues above and commit again.\n\n");
  process.exit(1);
}
