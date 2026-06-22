const axios = require('axios');

class ExtensionPublisher {
  constructor(apiKey, baseUrl = 'https://marketplace.hf-space.io/api') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async publish(manifest, packagePath) {
    return { success: true, id: manifest.id, version: manifest.version };
  }
}

module.exports = { ExtensionPublisher };
