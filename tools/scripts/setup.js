#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

async function setup() {
  console.log('Setting up HF Space development environment...');

  // Create required directories
  const dirs = [
    'runtime/cache/models',
    'runtime/temp/builds',
    'runtime/temp/logs',
    'runtime/sqlite',
    'security/audit-logs',
    'logs',
  ];

  for (const dir of dirs) {
    await fs.ensureDir(path.resolve(dir));
    console.log(`✓ Created ${dir}`);
  }

  // Copy .env.example if .env doesn't exist
  const envExample = path.resolve('config/.env.example');
  const envLocal = path.resolve('config/.env.local');
  if (await fs.pathExists(envExample) && !await fs.pathExists(envLocal)) {
    await fs.copy(envExample, envLocal);
    console.log('✓ Created .env.local from .env.example');
  }

  console.log('\n✅ Setup complete! Run `pnpm dev` to start development.');
}

setup().catch(console.error);
