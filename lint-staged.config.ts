module.exports = {
  "*.{ts,tsx,js,jsx}": [
    "node scripts/check-eslint-config.mjs",
    "eslint --fix --max-warnings 0",
    "prettier --write",
    () => "tsc --noEmit",
  ],
  "src/screens/**/ui/*.{tsx,jsx}": ["node scripts/check-semantic.mjs"],
  "*.css": ["prettier --write"],
  "*.{json,md}": ["prettier --write"],
};
