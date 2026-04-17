#!/usr/bin/env node

const { execFileSync } = require('node:child_process');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const appRoot = path.resolve(__dirname, '..');
const generatedRoot = path.join(appRoot, '.features-gen');

function walk(dirPath, fileList = []) {
  if (!fs.existsSync(dirPath)) return fileList;

  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const entryPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      walk(entryPath, fileList);
      continue;
    }

    fileList.push(entryPath);
  }

  return fileList.sort();
}

function snapshotGeneratedTree() {
  const files = walk(generatedRoot);
  const hash = crypto.createHash('sha256');

  for (const filePath of files) {
    hash.update(path.relative(generatedRoot, filePath));
    hash.update('\n');
    hash.update(fs.readFileSync(filePath));
    hash.update('\n');
  }

  return {
    count: files.length,
    digest: hash.digest('hex'),
  };
}

const before = snapshotGeneratedTree();

execFileSync('npm', ['run', 'test:e2e:generate'], {
  cwd: appRoot,
  stdio: 'inherit',
});

const after = snapshotGeneratedTree();

if (before.count !== after.count || before.digest !== after.digest) {
  console.error(
    'generated Playwright tests were stale. Run `npm run test:e2e:generate` and keep the resulting `.features-gen/` changes.',
  );
  process.exit(1);
}

console.log('generated Playwright tests are in sync');
