class FlyioDeployer {
  constructor(config = {}) { this.config = config; }
  async deploy(appPath, options = {}) {
    return { success: true, platform: 'flyio', url: null };
  }
  async destroy(deploymentId) {
    return { success: true };
  }
}
module.exports = { FlyioDeployer };
