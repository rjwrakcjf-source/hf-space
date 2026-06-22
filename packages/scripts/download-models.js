#!/usr/bin/env node
const { ModelDownloader } = require('@hf-space/models');

const models = process.argv.slice(2);

async function main() {
  const downloader = new ModelDownloader();
  for (const modelId of models) {
    console.log(`Downloading ${modelId}...`);
    try {
      await downloader.download(modelId);
      console.log(`✓ ${modelId} downloaded`);
    } catch (err) {
      console.error(`✗ Failed: ${err.message}`);
    }
  }
}

main().catch(console.error);
