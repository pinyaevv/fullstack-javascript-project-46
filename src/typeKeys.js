import _ from 'lodash';

const diffFile = (file1, file2) => {
    const keyData = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));

    const result = keyData.map((key) => {
        if (!_.has(file2, key)) {
            return ` - ${key}: ${file1[key]}`;
        }

        if (!_.has(file1, key)) {
            return ` + ${key}: ${file2[key]}`;
        }

        if (file1[key] !== file2[key]) {
            return ` - ${key}: ${file1[key]}\n + ${key}: ${file2[key]}`;
        }
        return `   ${key}: ${file1[key]}`;
    });

    return `{\n${result.join('\n')}\n}`;
};

export default diffFile;