#!/usr/bin/env node

const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const appRoot = path.resolve(__dirname, '..');
const generatedRoot = path.join(appRoot, '.features-gen');

function removeMetadataFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return;

  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const entryPath = path.join(dirPath, entry.name);

    if (entry.name.startsWith('._')) {
      fs.rmSync(entryPath, { force: true, recursive: true });
      continue;
    }

    if (entry.isDirectory()) {
      removeMetadataFiles(entryPath);
    }
  }
}

execFileSync('npx', ['bddgen'], {
  cwd: appRoot,
  stdio: 'inherit',
});

removeMetadataFiles(generatedRoot);
