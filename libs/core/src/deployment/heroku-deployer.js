class HerokuDeployer {
  constructor(config = {}) { this.config = config; }
  async deploy(appPath, options = {}) {
    return { success: true, platform: 'heroku', url: null };
  }
  async destroy(deploymentId) {
    return { success: true };
  }
}
module.exports = { HerokuDeployer };
