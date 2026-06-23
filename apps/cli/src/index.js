#!/usr/bin/env node
const { program } = require('commander');
const { version } = require('../package.json');
const buildCommand = require('./commands/build');
const deployCommand = require('./commands/deploy');
const modelCommand = require('./commands/model');
const initCommand = require('./commands/init');

program
  .name('hf-space')
  .description('HF Space CLI - AI-powered app builder and deployer')
  .version(version);

program.addCommand(buildCommand);
program.addCommand(deployCommand);
program.addCommand(modelCommand);
program.addCommand(initCommand);

program.parse(process.argv);
