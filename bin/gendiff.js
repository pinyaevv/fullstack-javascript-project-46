#!/usr/bin/env node

import { program } from 'commander';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

program
  .name('diff')
  .description('Getting the difference between the data.')
  .argument('<filepath1>', 'first data')
  .argument('<filepath2>', 'second data')
  .action((filepath1, filepath2) => {
    console.log(`Difference between ${filepath1} and ${filepath2}`);
  });

program.parse();