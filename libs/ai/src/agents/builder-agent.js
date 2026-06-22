const { APP_GENERATION_SYSTEM } = require('../prompts/app-generation-prompt');

class BuilderAgent {
  constructor(provider) {
    this.provider = provider;
  }

  async generate(description, options = {}) {
    const prompt = `${APP_GENERATION_SYSTEM}\n\nCreate an application: ${description}`;
    const response = await this.provider.complete(prompt, options);
    return this.parseResponse(response);
  }

  parseResponse(response) {
    return { files: [], description: response };
  }
}

module.exports = { BuilderAgent };
