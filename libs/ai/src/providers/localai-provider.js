const axios = require('axios');

class LocalAIProvider {
  constructor(baseUrl = 'http://localhost:8080') {
    this.baseUrl = baseUrl;
    this.name = 'localai';
  }

  async complete(prompt, options = {}) {
    const response = await axios.post(`${this.baseUrl}/v1/completions`, {
      model: options.model || 'ggml-gpt4all-j',
      prompt,
      max_tokens: options.maxTokens || 200,
    });
    return response.data.choices[0].text;
  }
}

module.exports = { LocalAIProvider };
