const { ExtensionValidator } = require('./extension-validator');
const { ExtensionSandbox } = require('../sandbox/extension-sandbox');

class ExtensionLoader {
  constructor() {
    this.validator = new ExtensionValidator();
    this.sandbox = new ExtensionSandbox();
    this.loaded = new Map();
  }

  async load(extensionPath, manifest) {
    await this.validator.validate(manifest);
    const runtime = await this.sandbox.create(extensionPath, manifest);
    this.loaded.set(manifest.id, { manifest, runtime, loadedAt: new Date() });
    return { id: manifest.id, loaded: true };
  }

  async unload(extensionId) {
    const ext = this.loaded.get(extensionId);
    if (ext) {
      await this.sandbox.destroy(extensionId);
      this.loaded.delete(extensionId);
    }
  }

  getLoaded() {
    return Array.from(this.loaded.values()).map(e => e.manifest);
  }
}

module.exports = { ExtensionLoader };
