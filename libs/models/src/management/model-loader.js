const path = require('path');
const fs = require('fs-extra');

class ModelLoader {
  constructor(cacheDir = './runtime/cache/models') {
    this.cacheDir = cacheDir;
    this.loaded = new Map();
  }

  async load(modelId, options = {}) {
    if (this.loaded.has(modelId)) return this.loaded.get(modelId);
    const modelPath = path.join(this.cacheDir, modelId.replace('/', '--'));
    if (!await fs.pathExists(modelPath)) {
      throw new Error(`Model ${modelId} not found in cache. Run download first.`);
    }
    const model = { id: modelId, path: modelPath, loadedAt: new Date() };
    this.loaded.set(modelId, model);
    return model;
  }

  unload(modelId) {
    return this.loaded.delete(modelId);
  }

  listLoaded() {
    return Array.from(this.loaded.keys());
  }
}

module.exports = { ModelLoader };
