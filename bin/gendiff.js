#!/usr/bin/env node

import { program } from 'commander';
import gendiff from '../index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filePath1, filePath2) => {
    const { format } = program.opts();
    const result = gendiff(filePath1, filePath2, format);
    console.log(result);
  });

program.parse();
