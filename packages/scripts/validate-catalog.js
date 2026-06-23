#!/usr/bin/env node
const fs = require('fs');
const catalog = JSON.parse(fs.readFileSync('./models/catalog.json', 'utf8'));

let errors = 0;
for (const model of catalog.models) {
  if (!model.id) { console.error(`Model missing id:`, model); errors++; }
  if (!model.name) { console.error(`Model ${model.id} missing name`); errors++; }
  if (!model.type) { console.error(`Model ${model.id} missing type`); errors++; }
}

if (errors > 0) {
  console.error(`\nCatalog validation failed with ${errors} errors`);
  process.exit(1);
}
console.log(`✓ Catalog valid: ${catalog.models.length} models`);
