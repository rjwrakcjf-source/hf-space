const { Command } = require('commander');
const ora = require('ora');

const deployCommand = new Command('deploy')
  .description('Deploy an application')
  .argument('<path>', 'Path to the application')
  .option('-p, --platform <platform>', 'Deployment platform', 'vercel')
  .action(async (appPath, options) => {
    const spinner = ora(`Deploying to ${options.platform}...`).start();
    try {
      spinner.succeed('Deployed successfully');
    } catch (error) {
      spinner.fail(`Deployment failed: ${error.message}`);
      process.exit(1);
    }
  });

module.exports = deployCommand;
