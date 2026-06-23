class ExtensionSandbox {
  constructor() { this.sandboxes = new Map(); }

  async create(extensionPath, manifest) {
    const id = manifest.id;
    this.sandboxes.set(id, { id, extensionPath, manifest, createdAt: new Date() });
    return this.sandboxes.get(id);
  }

  async destroy(extensionId) {
    this.sandboxes.delete(extensionId);
  }

  async execute(extensionId, method, args = []) {
    if (!this.sandboxes.has(extensionId)) throw new Error(`Sandbox not found: ${extensionId}`);
    return null;
  }
}

module.exports = { ExtensionSandbox };
