class ExtensionAPI {
  constructor(extensionId, permissions = []) {
    this.extensionId = extensionId;
    this.permissions = new Set(permissions);
  }

  requirePermission(permission) {
    if (!this.permissions.has(permission)) {
      throw new Error(`Extension ${this.extensionId} lacks permission: ${permission}`);
    }
  }

  createStorageAPI() {
    this.requirePermission('storage');
    const data = {};
    return {
      get: (key) => data[key],
      set: (key, value) => { data[key] = value; },
      delete: (key) => { delete data[key]; },
    };
  }
}

module.exports = { ExtensionAPI };
