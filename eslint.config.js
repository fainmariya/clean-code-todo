const js = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const globals = require("globals");

module.exports = defineConfig([
  {
    files: ["app.js"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "warn",
    },
  },
  {
    files: ["eslint.config.js"],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
