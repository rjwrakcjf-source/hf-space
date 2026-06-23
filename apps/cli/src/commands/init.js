const { Command } = require('commander');
const inquirer = require('inquirer');

const initCommand = new Command('init')
  .description('Initialize a new HF Space project')
  .argument('[name]', 'Project name')
  .action(async (name) => {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: name || 'my-hf-space-app',
      },
      {
        type: 'list',
        name: 'template',
        message: 'Select a template:',
        choices: ['react-starter', 'nextjs-starter', 'vue-starter'],
      },
    ]);
    console.log(`Initializing project: ${answers.name}`);
  });

module.exports = initCommand;
