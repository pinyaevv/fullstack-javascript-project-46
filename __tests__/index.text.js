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
    common: {
      - follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
    }
}`,
  },

  {
    file1: 'file1.yml',
    file2: 'file2.yml',
    expected: `{
    common: {
      - follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
    }
}`,
  },

];

test('compare key values', () => {
  testFileCase.forEach(({ file1, file2, expected }) => {
    const diffFile = gendiff(getFixturePath(file1), getFixturePath(file2));
    expect(diffFile).toEqual(expected);
  });
});
