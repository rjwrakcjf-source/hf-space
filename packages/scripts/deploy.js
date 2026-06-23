#!/usr/bin/env node
const { Deployer } = require('@hf-space/core');

async function main() {
  const [,, platform, appPath] = process.argv;
  if (!platform || !appPath) {
    console.error('Usage: deploy.js <platform> <app-path>');
    process.exit(1);
  }
  const deployer = new Deployer(platform);
  const result = await deployer.deploy(appPath);
  console.log('Deployment result:', result);
}

main().catch(console.error);
