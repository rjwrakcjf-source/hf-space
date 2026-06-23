#!/usr/bin/env node
const { ModelConverter } = require('@hf-space/models');

async function main() {
  const converter = new ModelConverter();
  console.log('Model converter initialized');
}

main().catch(console.error);
