class ExtensionRuntime {
  constructor(extensionId) {
    this.extensionId = extensionId;
    this.exports = {};
  }

  async call(method, ...args) {
    if (typeof this.exports[method] === 'function') {
      return this.exports[method](...args);
    }
    throw new Error(`Method ${method} not found in extension ${this.extensionId}`);
  }
}

module.exports = { ExtensionRuntime };
