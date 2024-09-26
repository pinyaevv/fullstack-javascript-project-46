import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../src/diffFiles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

const jsonFile1 = getFixturePath('file1.json');
const jsonFile2 = getFixturePath('file2.json');
const ymlFile1 = getFixturePath('file1.yml');
const ymlFile2 = getFixturePath('file2.yml');

const normalizeWs = (string) => string.replace(/\s+/g, ' ').trim();

const testStructure = `{
   common: {
    + follow: false
      setting1: Value 1
    - setting2: 200
    - setting3: true
    + setting3: null
    + setting4: blah blah
    + setting5: {
          key5: value5
      }
      setting6: {
          doge: {
            - wow: 
            + wow: so much
          }
          key: value
        + ops: vops
      }
  }
  group1: {
    - baz: bas
    + baz: bars
      foo: bar
    - nest: {
          key: value
      }
    + nest: str
  }
- group2: {
      abc: 12345
      deep: {
          id: 45
      }
  }
+ group3: {
      deep: {
          id: {
              number: 45
          }
      }
      fee: 100500
  }
}`;

const plainStructure = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;

const jsonStructure = '[{"key":"common","children":[{"key":"follow","value":false,"children":[],"status":"added"},{"key":"setting1","value":"Value 1","children":[],"status":"unchanged"},{"key":"setting2","value":200,"children":[],"status":"deleted"},{"key":"setting3","oldValue":true,"newValue":null,"children":[],"status":"changed"},{"key":"setting4","value":"blah blah","children":[],"status":"added"},{"key":"setting5","value":{"key5":"value5"},"children":[],"status":"added"},{"key":"setting6","children":[{"key":"doge","children":[{"key":"wow","oldValue":"","newValue":"so much","children":[],"status":"changed"}],"status":"nested"},{"key":"key","value":"value","children":[],"status":"unchanged"},{"key":"ops","value":"vops","children":[],"status":"added"}],"status":"nested"}],"status":"nested"},{"key":"group1","children":[{"key":"baz","oldValue":"bas","newValue":"bars","children":[],"status":"changed"},{"key":"foo","value":"bar","children":[],"status":"unchanged"},{"key":"nest","oldValue":{"key":"value"},"newValue":"str","children":[],"status":"changed"}],"status":"nested"},{"key":"group2","value":{"abc":12345,"deep":{"id":45}},"children":[],"status":"deleted"},{"key":"group3","value":{"deep":{"id":{"number":45}},"fee":100500},"children":[],"status":"added"}]';

test('compare key values', () => {
  expect(normalizeWs(gendiff(jsonFile1, jsonFile2))).toEqual(normalizeWs(testStructure));
  expect(normalizeWs(gendiff(ymlFile1, ymlFile2))).toEqual(normalizeWs(testStructure));
});

test('compare key values in stylish', () => {
  expect(normalizeWs(gendiff(jsonFile1, jsonFile2, 'stylish'))).toEqual(normalizeWs(testStructure));
  expect(normalizeWs(gendiff(ymlFile1, ymlFile2, 'stylish'))).toEqual(normalizeWs(testStructure));
});

test('compare key values in plain', () => {
  expect(gendiff(jsonFile1, jsonFile2, 'plain')).toEqual(plainStructure);
  expect(gendiff(ymlFile1, ymlFile2, 'plain')).toEqual(plainStructure);
});

test('compare key values in json', () => {
  expect(gendiff(jsonFile1, jsonFile2, 'json')).toEqual(jsonStructure);
  expect(gendiff(ymlFile1, ymlFile2, 'json')).toEqual(jsonStructure);
});
