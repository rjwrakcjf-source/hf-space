#!/usr/bin/env node
const { ModelProfiler } = require('@hf-space/models');

async function main() {
  const profiler = new ModelProfiler();
  const modelId = process.argv[2];
  if (!modelId) { console.error('Usage: benchmark-models.js <model-id>'); process.exit(1); }
  const result = await profiler.profile(modelId, 'Hello, world!');
  console.log('Benchmark result:', result);
}

main().catch(console.error);
