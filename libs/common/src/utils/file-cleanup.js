const fs = require('fs-extra');
const path = require('path');

async function cleanupOldFiles(dir, maxAgeMs = 24 * 60 * 60 * 1000) {
  const now = Date.now();
  const files = await fs.readdir(dir).catch(() => []);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath).catch(() => null);
    if (stat && now - stat.mtimeMs > maxAgeMs) {
      await fs.remove(filePath);
    }
  }
}

module.exports = { cleanupOldFiles };
