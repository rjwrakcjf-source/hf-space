class NetlifyDeployer {
  constructor(config = {}) { this.config = config; }
  async deploy(appPath, options = {}) {
    return { success: true, platform: 'netlify', url: null };
  }
  async destroy(deploymentId) {
    return { success: true };
  }
}
module.exports = { NetlifyDeployer };
