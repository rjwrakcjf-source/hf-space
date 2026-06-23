const fs = require('fs-extra');
const path = require('path');

async function generateFile(filePath, content) {
  await fs.ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, content);
  return { path: filePath, size: Buffer.byteLength(content) };
}

module.exports = { generateFile };
