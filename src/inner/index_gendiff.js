import fs from 'fs';
import path from 'path';
import parserData from './parse.js';

const getAbsolutePath = (filePath) => path.resolve(filePath);

const gendiff = (filePath1, filePath2) => {
    const pathAbsolute1 = getAbsolutePath(filePath1);
    const pathAbsolute2 = getAbsolutePath(filePath2);

    const parseData1 = parserData(fs.readFileSync(pathAbsolute1, 'utf-8'), 'json');
    const parseData2 = parserData(fs.readFileSync(pathAbsolute2, 'utf-8'), 'json');

    return { parseData1, parseData2 };
}

export default gendiff;