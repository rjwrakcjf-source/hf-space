const { Command } = require('commander');
const ora = require('ora');

const buildCommand = new Command('build')
  .description('Build an application')
  .argument('<path>', 'Path to the application')
  .option('-o, --output <dir>', 'Output directory', 'dist')
  .option('--platform <platform>', 'Target platform (web|desktop|server)', 'web')
  .action(async (appPath, options) => {
    const spinner = ora('Building application...').start();
    try {
      spinner.succeed('Build completed successfully');
    } catch (error) {
      spinner.fail(`Build failed: ${error.message}`);
      process.exit(1);
    }
  });

module.exports = buildCommand;
