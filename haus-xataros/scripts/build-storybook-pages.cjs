#!/usr/bin/env node

const { execFileSync } = require('node:child_process');
const path = require('node:path');

const appRoot = path.resolve(__dirname, '..');

execFileSync(
  'npx',
  [
    'storybook',
    'build',
    '--output-dir',
    'dist/review/storybook',
  ],
  {
    cwd: appRoot,
    stdio: 'inherit',
    env: {
      ...process.env,
      STORYBOOK_BASE_PATH: `${process.env.VITE_BASE_PATH ?? '/'}review/storybook/`,
    },
  },
);
