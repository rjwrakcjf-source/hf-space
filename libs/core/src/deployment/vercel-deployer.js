class VercelDeployer {
  constructor(config = {}) { this.config = config; }
  async deploy(appPath, options = {}) {
    return { success: true, platform: 'vercel', url: null };
  }
  async destroy(deploymentId) {
    return { success: true };
  }
}
module.exports = { VercelDeployer };
