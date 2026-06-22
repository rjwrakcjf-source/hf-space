const axios = require('axios');
class KhojAdapter {
  constructor(options = {}) {
    this.baseUrl = options.baseUrl || 'http://localhost:42110';
  }
  async complete(prompt, options = {}) {
    const response = await axios.post(`${this.baseUrl}/api/chat`, { q: prompt });
    return response.data.response || '';
  }
}
module.exports = { KhojAdapter };
