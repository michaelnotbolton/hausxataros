#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const appRoot = path.resolve(__dirname, '..');
const lockfilePath = path.join(appRoot, 'package-lock.json');
const packageJsonPath = path.join(appRoot, 'package.json');

const requiredOptionalDependencies = [
  '@rolldown/binding-linux-arm64-gnu',
  '@rolldown/binding-linux-arm64-musl',
  '@rolldown/binding-linux-x64-gnu',
  '@rolldown/binding-linux-x64-musl',
  'lightningcss-linux-arm64-gnu',
  'lightningcss-linux-arm64-musl',
  'lightningcss-linux-x64-gnu',
  'lightningcss-linux-x64-musl',
];

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

function readPackageJson() {
  try {
    return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  } catch (error) {
    fail(`could not read package.json: ${error.message}`);
  }
}

function readLockfile() {
  try {
    return JSON.parse(fs.readFileSync(lockfilePath, 'utf8'));
  } catch (error) {
    fail(`could not read package-lock.json: ${error.message}`);
  }
}

function verifyPackageJson(packageJson) {
  const optionalDependencies = packageJson.optionalDependencies ?? {};
  const missing = requiredOptionalDependencies.filter(
    (dependency) => !optionalDependencies[dependency],
  );

  if (missing.length > 0) {
    fail(
      `package.json is missing required optional native bindings: ${missing.join(
        ', ',
      )}`,
    );
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
  if (process.platform !== 'linux' || !['x64', 'arm64'].includes(process.arch)) {
    return;
  }

  const libcVariant = hasGlibc() ? 'gnu' : 'musl';
  const requiredInstalledEntries = [
    `node_modules/@rolldown/binding-linux-${process.arch}-${libcVariant}`,
    `node_modules/lightningcss-linux-${process.arch}-${libcVariant}`,
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

const packageJson = readPackageJson();
verifyPackageJson(packageJson);

const lockfile = readLockfile();
verifyLockfile(lockfile);
verifyInstalledBindings();

console.log('native binding check passed');
