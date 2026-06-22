const Anthropic = require('@anthropic-ai/sdk');

class AnthropicProvider {
  constructor(apiKey) {
    this.client = new Anthropic({ apiKey: apiKey || process.env.ANTHROPIC_API_KEY });
    this.name = 'anthropic';
  }

  async complete(prompt, options = {}) {
    const response = await this.client.messages.create({
      model: options.model || 'claude-3-5-sonnet-20241022',
      max_tokens: options.maxTokens || 2048,
      messages: [{ role: 'user', content: prompt }],
    });
    return response.content[0].text;
  }
}

module.exports = { AnthropicProvider };
