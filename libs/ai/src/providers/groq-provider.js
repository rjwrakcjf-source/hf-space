const axios = require('axios');

class GroqProvider {
  constructor(apiKey) {
    this.apiKey = apiKey || process.env.GROQ_API_KEY;
    this.baseUrl = 'https://api.groq.com/openai/v1';
    this.name = 'groq';
  }

  async complete(prompt, options = {}) {
    const response = await axios.post(`${this.baseUrl}/chat/completions`, {
      model: options.model || 'llama3-8b-8192',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: options.maxTokens || 2048,
    }, {
      headers: { Authorization: 'Bearer ' + this.apiKey },
    });
    return response.data.choices[0].message.content;
  }
}

module.exports = { GroqProvider };
