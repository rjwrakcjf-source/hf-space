const { Command } = require('commander');

module.exports = new Command('build')
  .description('Build commands')
  .command('all')
  .action(() => {
    console.log('Building all packages...');
  });
