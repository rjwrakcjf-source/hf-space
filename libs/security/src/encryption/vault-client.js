const Vault = require('node-vault');

class VaultClient {
  constructor(options = {}) {
    this.client = Vault({
      endpoint: options.endpoint || process.env.VAULT_ADDR || 'http://127.0.0.1:8200',
      token: options.token || process.env.VAULT_TOKEN,
    });
  }

  async getSecret(path) {
    try {
      const { data } = await this.client.read(path);
      return data;
    } catch (err) {
      throw new Error(`Failed to get secret at ${path}: ${err.message}`);
    }
  }

  async writeSecret(path, data) {
    await this.client.write(path, data);
    return { success: true };
  }
}

module.exports = { VaultClient };
