const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

class ModelDownloader {
  constructor(cacheDir = './runtime/cache/models') {
    this.cacheDir = cacheDir;
  }

  async download(modelId, options = {}) {
    const destDir = path.join(this.cacheDir, modelId.replace('/', '--'));
    await fs.ensureDir(destDir);
    const url = `https://huggingface.co/${modelId}/resolve/main/config.json`;
    try {
      const response = await axios.get(url, { headers: options.headers || {} });
      await fs.writeJson(path.join(destDir, 'config.json'), response.data);
    } catch (err) {
      throw new Error(`Failed to download model ${modelId}: ${err.message}`);
    }
    return { modelId, path: destDir };
  }
}

module.exports = { ModelDownloader };
