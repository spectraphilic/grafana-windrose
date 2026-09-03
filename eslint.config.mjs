import { defineConfig } from 'eslint/config';
import baseConfig from './.config/eslint.config.mjs';

export default defineConfig([
  {
    ignores: [
      'dist/',
      'node_modules/',
      '**/.*.swp',
      '**/logs',
      '**/*.log',
      '**/npm-debug.log*',
      '**/yarn-debug.log*',
      '**/yarn-error.log*',
      '**/.pnpm-debug.log*',
      '**/pids',
      '**/*.pid',
      '**/*.seed',
      '**/*.pid.lock',
      '**/lib-cov',
      '**/coverage',
      '**/artifacts/',
      '**/work/',
      '**/ci/',
      '**/e2e-results/',
      '**/cypress/videos',
      '**/cypress/report.json',
      '**/.idea',
      '**/.eslintcache',
    ],
  },
  ...baseConfig,
]);
