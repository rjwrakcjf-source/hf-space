class DockerDeployer {
  constructor(config = {}) { this.config = config; }
  async deploy(appPath, options = {}) {
    return { success: true, platform: 'docker', url: null };
  }
  async destroy(deploymentId) {
    return { success: true };
  }
}
module.exports = { DockerDeployer };
