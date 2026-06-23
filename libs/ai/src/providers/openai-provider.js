const OpenAI = require('openai');

class OpenAIProvider {
  constructor(apiKey) {
    this.client = new OpenAI({ apiKey: apiKey || process.env.OPENAI_API_KEY });
    this.name = 'openai';
  }

  async complete(prompt, options = {}) {
    const response = await this.client.chat.completions.create({
      model: options.model || 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: options.maxTokens || 2048,
      temperature: options.temperature || 0.7,
    });
    return response.choices[0].message.content;
  }

  async stream(prompt, options = {}) {
    return this.client.chat.completions.create({
      model: options.model || 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      stream: true,
    });
  }
}

module.exports = { OpenAIProvider };
