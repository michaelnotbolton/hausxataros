#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const appRoot = path.resolve(__dirname, '..');
const lockfilePath = path.join(appRoot, 'package-lock.json');

const requiredLockEntries = [
  'node_modules/@rolldown/binding-linux-x64-gnu',
  'node_modules/@rolldown/binding-linux-x64-musl',
  'node_modules/lightningcss-linux-x64-gnu',
  'node_modules/lightningcss-linux-x64-musl',
];

function fail(message) {
  console.error(`native binding check failed: ${message}`);
  process.exit(1);
}

function hasGlibc() {
  return Boolean(process.report?.getReport?.().header?.glibcVersionRuntime);
}

function readLockfile() {
  try {
    return JSON.parse(fs.readFileSync(lockfilePath, 'utf8'));
  } catch (error) {
    fail(`could not read package-lock.json: ${error.message}`);
  }
}

function verifyLockfile(lockfile) {
  const packages = lockfile.packages ?? {};
  const missing = requiredLockEntries.filter((entry) => !packages[entry]);

  if (missing.length > 0) {
    fail(
      `package-lock.json is missing required Linux native bindings: ${missing.join(
        ', ',
      )}`,
    );
  }
}

function verifyInstalledBindings() {
  if (process.platform !== 'linux' || process.arch !== 'x64') {
    return;
  }

  const libcVariant = hasGlibc() ? 'gnu' : 'musl';
  const requiredInstalledEntries = [
    `node_modules/@rolldown/binding-linux-x64-${libcVariant}`,
    `node_modules/lightningcss-linux-x64-${libcVariant}`,
  ];

  const missing = requiredInstalledEntries.filter(
    (entry) => !fs.existsSync(path.join(appRoot, entry)),
  );

  if (missing.length > 0) {
    fail(
      `installed dependencies are missing required Linux native bindings for ${libcVariant}: ${missing.join(
        ', ',
      )}`,
    );
  }
}

const lockfile = readLockfile();
verifyLockfile(lockfile);
verifyInstalledBindings();

console.log('native binding check passed');
