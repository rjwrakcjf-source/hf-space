class DeploymentAgent {
  constructor(provider) {
    this.provider = provider;
  }

  async selectPlatform(requirements) {
    const prompt = `Based on these requirements, recommend the best deployment platform:\n${JSON.stringify(requirements, null, 2)}`;
    return this.provider.complete(prompt);
  }

  async generateConfig(platform, appConfig) {
    const prompt = `Generate deployment configuration for ${platform} with these settings:\n${JSON.stringify(appConfig, null, 2)}`;
    return this.provider.complete(prompt);
  }
}

module.exports = { DeploymentAgent };
