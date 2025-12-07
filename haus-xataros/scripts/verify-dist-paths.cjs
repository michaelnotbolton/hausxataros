#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const distIndex = path.join(__dirname, '..', 'dist', 'index.html');

try {
  const html = fs.readFileSync(distIndex, 'utf8');
  const expectedPrefix = '/hausxataros/';

  const assetRefs = [...html.matchAll(/\b(href|src)="([^"]+)"/g)].map(m => m[2]);
  const mismatches = assetRefs.filter(ref => ref.includes('/assets/') && !ref.startsWith(expectedPrefix));

  if (mismatches.length > 0) {
    console.error('Found asset URL(s) not prefixed with', expectedPrefix);
    mismatches.forEach(ref => console.error(' -', ref));
    process.exit(1);
  }

  console.log('OK: All asset URLs use prefix', expectedPrefix);
  process.exit(0);
} catch (err) {
  console.error('Verification failed:', err.message);
  process.exit(1);
}
