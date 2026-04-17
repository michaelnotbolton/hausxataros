#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const appRoot = path.resolve(__dirname, '..');

function hasGlibc() {
  return Boolean(process.report?.getReport?.().header?.glibcVersionRuntime);
}

function packagePath(packageName) {
  return path.join(appRoot, 'node_modules', ...packageName.split('/'));
}

if (process.platform !== 'linux' || !['x64', 'arm64'].includes(process.arch)) {
  console.log('native binding bootstrap skipped for non-Linux build host');
  process.exit(0);
}

const libcVariant = hasGlibc() ? 'gnu' : 'musl';
const requiredPackages = [
  `@rolldown/binding-linux-${process.arch}-${libcVariant}`,
  `lightningcss-linux-${process.arch}-${libcVariant}`,
];

const missing = requiredPackages.filter(
  (packageName) => !fs.existsSync(packagePath(packageName)),
);

if (missing.length === 0) {
  console.log(`native bindings already present for linux/${process.arch}/${libcVariant}`);
  process.exit(0);
}

console.log(`installing missing native bindings: ${missing.join(', ')}`);
execFileSync('npm', ['install', '--no-save', ...missing], {
  cwd: appRoot,
  stdio: 'inherit',
});
