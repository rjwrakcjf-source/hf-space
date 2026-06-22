#!/usr/bin/env node
const { execSync } = require('child_process');
console.log('Building desktop installers...');
execSync('pnpm --filter=desktop build', { stdio: 'inherit' });
console.log('Build complete!');
