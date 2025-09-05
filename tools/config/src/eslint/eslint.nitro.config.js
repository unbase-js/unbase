import base from './eslint.base.config.js';

/**
 * A custom ESLint configuration for libraries that use Nitro.js.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const nitroESLintConfig = [
  ...base,
  {
    ignores: [
      '**/.nitro/**',
      '**/.output/**',
      '**/nitro.config.*'
    ]
  }
];
