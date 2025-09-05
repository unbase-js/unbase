import unjs from 'eslint-config-unjs'
import turboPlugin from 'eslint-plugin-turbo'

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export default [
  {
    plugins: {
      turbo: turboPlugin
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn'
    }
  },
  ...unjs({
    ignores: [
      'dist',
      'node_modules',
      '.turbo',
      '.nitro',
      '.output'
    ],
    rules: {
      'unicorn/switch-case-braces': 'off',
      'quotes': ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'never'],
      'semi': ['error', 'never'],
      'prefer-ternary': 'off',
      '@typescript-eslint/prefer-ternary': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'turbo/no-undeclared-env-vars': 'warn'
    },
    markdown: {
      rules: {
        // markdown rule overrides
      }
    }
  })
]