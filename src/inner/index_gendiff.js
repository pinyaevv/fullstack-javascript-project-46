import fs from 'fs';
import path from 'path';
import parserData from './parse.js';
import buildTree from './buildTree.js'

const getAbsolutePath = (filePath) => path.resolve(filePath);
const formatFile = (filePath) => path.extname(filePath).slice(1);
const getData = (filePath) => parserData(fs.readFileSync(filePath, ('utf-8')), formatFile(filePath));

const gendiff = (filePath1, filePath2) => {
    const pathAbsolute1 = getAbsolutePath(filePath1);
    const pathAbsolute2 = getAbsolutePath(filePath2);

    const parseData1 = getData(pathAbsolute1);
    const parseData2 = getData(pathAbsolute2);

    const tree = buildTree(parseData1, parseData2);

    return { parseData1, parseData2 };
}

export default gendiff;