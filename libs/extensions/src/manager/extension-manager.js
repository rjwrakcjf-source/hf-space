const { ExtensionLoader } = require('../loader/extension-loader');
const { ExtensionRegistry } = require('./extension-registry');

class ExtensionManager {
  constructor() {
    this.loader = new ExtensionLoader();
    this.registry = new ExtensionRegistry();
  }

  async install(extensionId, source) {
    const manifest = await this.registry.getManifest(extensionId);
    await this.loader.load(source, manifest);
    await this.registry.markInstalled(extensionId);
    return { extensionId, installed: true };
  }

  async uninstall(extensionId) {
    await this.loader.unload(extensionId);
    await this.registry.markUninstalled(extensionId);
    return { extensionId, uninstalled: true };
  }

  listInstalled() {
    return this.loader.getLoaded();
  }
}

module.exports = { ExtensionManager };
