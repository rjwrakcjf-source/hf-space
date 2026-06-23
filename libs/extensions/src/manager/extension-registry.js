class ExtensionRegistry {
  constructor() {
    this.registry = new Map();
  }

  async getManifest(extensionId) {
    return this.registry.get(extensionId) || { id: extensionId, name: extensionId, version: '0.0.0', main: 'index.js' };
  }

  async register(manifest) {
    this.registry.set(manifest.id, manifest);
  }

  async markInstalled(extensionId) {
    const ext = this.registry.get(extensionId);
    if (ext) this.registry.set(extensionId, { ...ext, installed: true });
  }

  async markUninstalled(extensionId) {
    const ext = this.registry.get(extensionId);
    if (ext) this.registry.set(extensionId, { ...ext, installed: false });
  }
}

module.exports = { ExtensionRegistry };
