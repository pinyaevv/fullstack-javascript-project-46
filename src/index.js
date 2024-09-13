import fs from 'fs';
import path from 'path';
import parserData from './parse.js';
import diffFile from './typeKeys.js';

const getAbsolutePath = (filePath) => path.resolve(filePath);
const formatFile = (filePath) => path.extname(filePath).slice(1);
const getData = (filePath) => parserData(fs.readFileSync(filePath, ('utf-8')), formatFile(filePath));

const gendiff = (filePath1, filePath2) => {
  const pathAbsolute1 = getAbsolutePath(filePath1);
  const pathAbsolute2 = getAbsolutePath(filePath2);

  const getData1 = getData(pathAbsolute1);
  const getData2 = getData(pathAbsolute2);

  const compareFiles = diffFile(getData1, getData2);

  return compareFiles;
};

export default gendiff;
