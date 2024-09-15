import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

const testFileCase = [
  {
    file1: 'file1.json',
    file2: 'file2.json',
    expected: `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`,
  },

  {
    file1: 'filepath1.yml',
    file2: 'filepath2.yml',
    expected: `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`,
  },

];

test('compare key values', () => {
  testFileCase.forEach(({ file1, file2, expected }) => {
    const diffFile = gendiff(getFixturePath(file1), getFixturePath(file2));
    expect(diffFile).toEqual(expected);
  });
});
