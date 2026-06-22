const axios = require('axios');

class MarketplaceClient {
  constructor(baseUrl = 'https://marketplace.hf-space.io/api') {
    this.baseUrl = baseUrl;
  }

  async search(query, options = {}) {
    const { data } = await axios.get(`${this.baseUrl}/extensions`, { params: { q: query, ...options } });
    return data;
  }

  async getExtension(id) {
    const { data } = await axios.get(`${this.baseUrl}/extensions/${id}`);
    return data;
  }
}

module.exports = { MarketplaceClient };
