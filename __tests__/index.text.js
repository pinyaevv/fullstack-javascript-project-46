import path from 'path';
import gendiff from "../src/index.js";

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('different meanings in one key', () => {
    const file1 = getFixturePath('file1Test.json');
    const file2 = getFixturePath('file2Test.json');

    expect(gendiff(file1, file2)).toContain('+ key1: newValue');
    expect(gendiff(file1, file2)).toContain('  key2: value2');
    expect(gendiff(file1, file2)).toContain('+ key3: value3');
    expect(gendiff(file1, file2)).toContain('- key4: value4');
});
