class CodeAgent {
  constructor(provider) {
    this.provider = provider;
  }

  async review(code, language = 'javascript') {
    const prompt = `Review this ${language} code and suggest improvements:\n\n\`\`\`${language}\n${code}\n\`\`\``;
    return this.provider.complete(prompt);
  }

  async fix(code, error, language = 'javascript') {
    const prompt = `Fix this ${language} code that has the following error:\n\nError: ${error}\n\nCode:\n\`\`\`${language}\n${code}\n\`\`\``;
    return this.provider.complete(prompt);
  }

  async generate(description, language = 'javascript') {
    const prompt = `Generate ${language} code for: ${description}`;
    return this.provider.complete(prompt);
  }
}

module.exports = { CodeAgent };
