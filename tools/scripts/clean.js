#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

async function clean() {
  const targets = [
    'node_modules',
    'apps/*/dist',
    'apps/*/node_modules',
    'libs/*/dist',
    'libs/*/node_modules',
    'packages/*/node_modules',
    '.turbo',
    'coverage',
  ];

  for (const target of targets) {
    try {
      await fs.remove(path.resolve(target));
      console.log(`✓ Removed ${target}`);
    } catch {
      // Ignore errors for non-existent paths
    }
  }
  console.log('Clean complete!');
}

clean().catch(console.error);
