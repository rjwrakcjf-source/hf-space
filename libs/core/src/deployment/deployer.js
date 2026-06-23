const { VercelDeployer } = require('./vercel-deployer');
const { NetlifyDeployer } = require('./netlify-deployer');
const { HerokuDeployer } = require('./heroku-deployer');
const { RailwayDeployer } = require('./railway-deployer');
const { FlyioDeployer } = require('./flyio-deployer');
const { DockerDeployer } = require('./docker-deployer');
const { FreeStackDeployer } = require('./free-stack-deployer');

const DEPLOYERS = {
  vercel: VercelDeployer,
  netlify: NetlifyDeployer,
  heroku: HerokuDeployer,
  railway: RailwayDeployer,
  fly: FlyioDeployer,
  docker: DockerDeployer,
  free: FreeStackDeployer,
};

class Deployer {
  constructor(platform, config = {}) {
    const DeployerClass = DEPLOYERS[platform];
    if (!DeployerClass) throw new Error(`Unknown platform: ${platform}`);
    this.deployer = new DeployerClass(config);
    this.platform = platform;
  }

  async deploy(appPath, options = {}) {
    return this.deployer.deploy(appPath, options);
  }

  static listPlatforms() {
    return Object.keys(DEPLOYERS);
  }
}

module.exports = { Deployer };
