const { BrowserWindow } = require('electron');

class ExtensionHost {
  constructor() {
    this.extensions = new Map();
    this.sandboxes = new Map();
  }

  async loadExtension(extensionPath, manifest) {
    const sandboxWindow = new BrowserWindow({
      show: false,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: true,
        webSecurity: true,
      },
    });

    this.sandboxes.set(manifest.id, sandboxWindow);
    this.extensions.set(manifest.id, manifest);
    return { success: true, id: manifest.id };
  }

  async unloadExtension(extensionId) {
    const sandbox = this.sandboxes.get(extensionId);
    if (sandbox && !sandbox.isDestroyed()) {
      sandbox.destroy();
    }
    this.sandboxes.delete(extensionId);
    this.extensions.delete(extensionId);
  }
}

module.exports = { ExtensionHost };
