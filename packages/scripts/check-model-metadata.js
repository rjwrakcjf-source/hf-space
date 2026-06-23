#!/usr/bin/env node
const fs = require('fs');
const catalog = JSON.parse(fs.readFileSync('./models/catalog.json', 'utf8'));

for (const model of catalog.models) {
  if (!model.license) console.warn(`⚠ Model ${model.id} missing license`);
  if (!model.description) console.warn(`⚠ Model ${model.id} missing description`);
}

console.log('Metadata check complete');
