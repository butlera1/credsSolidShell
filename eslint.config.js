import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    env: {
      "browser": true,
      "node": true,
      "meteor": true
    },
    files: [
      "**/*.js",
      "**/*.jsx",
      "**/*.ts",
      "**/*.tsx",
    ],
    extends: [
      "@meteorjs/eslint-config-meteor"
    ],
    plugins: [
      "meteor"
    ],
    rules: {}
  }
]);
