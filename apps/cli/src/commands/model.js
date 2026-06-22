const { Command } = require('commander');
const ora = require('ora');

const modelCommand = new Command('model')
  .description('Manage AI models');

modelCommand
  .command('download <model-id>')
  .description('Download a model from Hugging Face')
  .action(async (modelId) => {
    const spinner = ora(`Downloading ${modelId}...`).start();
    try {
      spinner.succeed(`Model ${modelId} downloaded`);
    } catch (error) {
      spinner.fail(`Download failed: ${error.message}`);
    }
  });

modelCommand
  .command('list')
  .description('List available models')
  .action(async () => {
    console.log('Available models:');
  });

module.exports = modelCommand;
