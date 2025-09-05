import unjs from "eslint-config-unjs";
import turboPlugin from "eslint-plugin-turbo";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export default [
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  ...unjs({
    ignores: [
      // ignore paths
    ],
    rules: {
      // rule overrides
    },
    markdown: {
      rules: {
        // markdown rule overrides
      },
    },
  })
];