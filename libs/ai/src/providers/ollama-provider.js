const axios = require('axios');

class OllamaProvider {
  constructor(baseUrl = 'http://localhost:11434') {
    this.baseUrl = baseUrl;
    this.name = 'ollama';
  }

  async complete(prompt, options = {}) {
    const response = await axios.post(`${this.baseUrl}/api/generate`, {
      model: options.model || 'llama3',
      prompt,
      stream: false,
    });
    return response.data.response;
  }

  async listModels() {
    const response = await axios.get(`${this.baseUrl}/api/tags`);
    return response.data.models;
  }
}

module.exports = { OllamaProvider };
