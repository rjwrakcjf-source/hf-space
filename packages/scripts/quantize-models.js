#!/usr/bin/env node
const { ModelQuantizer } = require('@hf-space/models');

async function main() {
  const quantizer = new ModelQuantizer();
  const modelPath = process.argv[2];
  const bits = parseInt(process.argv[3] || '4');
  if (!modelPath) { console.error('Usage: quantize-models.js <model-path> [bits]'); process.exit(1); }
  const result = await quantizer.quantize(modelPath, bits);
  console.log('Quantization result:', result);
}

main().catch(console.error);
