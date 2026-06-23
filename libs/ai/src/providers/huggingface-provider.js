const { HfInference } = require('@huggingface/inference');

class HuggingFaceProvider {
  constructor(apiKey) {
    this.client = new HfInference(apiKey || process.env.HF_TOKEN);
    this.name = 'huggingface';
  }

  async complete(prompt, options = {}) {
    const response = await this.client.textGeneration({
      model: options.model || 'microsoft/DialoGPT-medium',
      inputs: prompt,
      parameters: { max_new_tokens: options.maxTokens || 200 },
    });
    return response.generated_text;
  }
}

module.exports = { HuggingFaceProvider };
