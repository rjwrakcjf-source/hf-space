class RailwayDeployer {
  constructor(config = {}) { this.config = config; }
  async deploy(appPath, options = {}) {
    return { success: true, platform: 'railway', url: null };
  }
  async destroy(deploymentId) {
    return { success: true };
  }
}
module.exports = { RailwayDeployer };
