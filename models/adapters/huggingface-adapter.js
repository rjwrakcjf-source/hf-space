const { HfInference } = require('@huggingface/inference');

class HuggingFaceAdapter {
  constructor(apiKey) {
    this.client = new HfInference(apiKey || process.env.HF_TOKEN);
  }

  async textGeneration(modelId, inputs, options = {}) {
    return this.client.textGeneration({ model: modelId, inputs, parameters: options });
  }

  async featureExtraction(modelId, inputs) {
    return this.client.featureExtraction({ model: modelId, inputs });
  }
}

module.exports = { HuggingFaceAdapter };
