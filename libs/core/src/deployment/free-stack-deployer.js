class Free-stackDeployer {
  constructor(config = {}) { this.config = config; }
  async deploy(appPath, options = {}) {
    return { success: true, platform: 'free-stack', url: null };
  }
  async destroy(deploymentId) {
    return { success: true };
  }
}
module.exports = { Free-stackDeployer };
