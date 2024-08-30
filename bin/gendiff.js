#!/usr/bin/env node

import { program } from 'commander';
import gendiff from '../src/inner/index_gendiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

program
  .option('-f, --format [type]', 'output format')
  .argument(`<filepath1>`)
  .argument(`<filepath2>`)
  .action((filePath1, filePath2) => {
    console.log(gendiff(filePath1, filePath2));
  })

  program.parse(process.argv);