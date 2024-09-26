import _ from 'lodash';

const diffFile = (file1, file2) => {
  const keyData = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));

  const nestedStructures = keyData.map((key) => {
    const val1 = file1[key];
    const val2 = file2[key];

    if (!_.has(file2, key)) {
      return {
        key,
        value: val1,
        children: [],
        status: 'deleted',
      };
    }

    if (!_.has(file1, key)) {
      return {
        key,
        value: val2,
        children: [],
        status: 'added',
      };
    }

    if (_.isObject(val1) && _.isObject(val2)) {
      const nestedValue = diffFile(val1, val2);
      return {
        key,
        children: nestedValue,
        status: 'nested',
      };
    }

    if (val1 !== val2) {
      return {
        key,
        oldValue: val1,
        newValue: val2,
        children: [],
        status: 'changed',
      };
    }

    return {
      key,
      value: val1,
      children: [],
      status: 'unchanged',
    };
  });

  return nestedStructures;
};

export default diffFile;
