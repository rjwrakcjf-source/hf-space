#!/usr/bin/env node
const { program } = require('commander');
const buildCmd = require('./commands/build');
const deployCmd = require('./commands/deploy');
const modelCmd = require('./commands/model');
const extensionCmd = require('./commands/extension');

program
  .name('hf-space-tools')
  .description('HF Space development tools')
  .version('1.0.0');

program.addCommand(buildCmd);
program.addCommand(deployCmd);
program.addCommand(modelCmd);
program.addCommand(extensionCmd);

program.parse(process.argv);
