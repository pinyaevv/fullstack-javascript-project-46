import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../src/diffFiles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const getDataFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const jsonFile1 = getFixturePath('file1.json');
const jsonFile2 = getFixturePath('file2.json');
const ymlFile1 = getFixturePath('file1.yml');
const ymlFile2 = getFixturePath('file2.yml');

const stylishTest = getDataFile('stylish.txt');
const plainTest = getDataFile('plain.txt');
const jsonTest = getDataFile('json.txt');

test('compare key values', () => {
  expect((gendiff(jsonFile1, jsonFile2))).toEqual((stylishTest));
  expect((gendiff(ymlFile1, ymlFile2))).toEqual((stylishTest));
});

test('compare key values in stylish', () => {
  expect((gendiff(jsonFile1, jsonFile2, 'stylish'))).toEqual((stylishTest));
  expect((gendiff(ymlFile1, ymlFile2, 'stylish'))).toEqual((stylishTest));
});

test('compare key values in plain', () => {
  expect(gendiff(jsonFile1, jsonFile2, 'plain')).toEqual(plainTest);
  expect(gendiff(ymlFile1, ymlFile2, 'plain')).toEqual(plainTest);
});

test('compare key values in json', () => {
  expect(gendiff(jsonFile1, jsonFile2, 'json')).toEqual(jsonTest);
  expect(gendiff(ymlFile1, ymlFile2, 'json')).toEqual(jsonTest);
});
