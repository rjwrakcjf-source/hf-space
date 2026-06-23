const fs = require('fs-extra');
const path = require('path');

class ModelCache {
  constructor(cacheDir = './runtime/cache/models') {
    this.cacheDir = cacheDir;
  }

  async has(modelId) {
    const modelPath = path.join(this.cacheDir, modelId.replace('/', '--'));
    return fs.pathExists(modelPath);
  }

  async list() {
    await fs.ensureDir(this.cacheDir);
    const dirs = await fs.readdir(this.cacheDir);
    return dirs.map(d => d.replace('--', '/'));
  }

  async clear(modelId) {
    if (modelId) {
      await fs.remove(path.join(this.cacheDir, modelId.replace('/', '--')));
    } else {
      await fs.emptyDir(this.cacheDir);
    }
  }

  async getSize() {
    let total = 0;
    const items = await this.list();
    for (const item of items) {
      const itemPath = path.join(this.cacheDir, item.replace('/', '--'));
      const stat = await fs.stat(itemPath).catch(() => null);
      if (stat) total += stat.size;
    }
    return total;
  }
}

module.exports = { ModelCache };
