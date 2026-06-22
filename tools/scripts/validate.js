#!/usr/bin/env node
const fs = require('fs-extra');

async function validate() {
  const checks = [
    {
      name: 'package.json exists',
      check: () => fs.pathExists('package.json'),
    },
    {
      name: 'pnpm-workspace.yaml exists',
      check: () => fs.pathExists('pnpm-workspace.yaml'),
    },
    {
      name: 'models/catalog.json valid',
      check: async () => {
        const catalog = await fs.readJson('models/catalog.json').catch(() => null);
        return catalog && Array.isArray(catalog.models);
      },
    },
  ];

  let passed = 0;
  let failed = 0;

  for (const { name, check } of checks) {
    try {
      const result = await check();
      if (result) {
        console.log(`✓ ${name}`);
        passed++;
      } else {
        console.error(`✗ ${name}`);
        failed++;
      }
    } catch (err) {
      console.error(`✗ ${name}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n${passed} passed, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

validate().catch(console.error);
