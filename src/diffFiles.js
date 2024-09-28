import fs from 'fs';
import path from 'path';
import parserData from './parses.js';
import diffFile from './typeKeys.js';
import formatters from './formatters/index.js';

const getAbsolutePath = (filePath) => path.resolve(filePath);
const formatFile = (filePath) => path.extname(filePath).slice(1);
const getData = (filePath) => parserData(fs.readFileSync(filePath, 'utf-8'), formatFile(filePath));

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const pathAbsolute1 = getAbsolutePath(filePath1);
  const pathAbsolute2 = getAbsolutePath(filePath2);

  const data1 = getData(pathAbsolute1);
  const data2 = getData(pathAbsolute2);

  const compareFiles = diffFile(data1, data2);

  return formatters[format](compareFiles);
};

export default gendiff;
