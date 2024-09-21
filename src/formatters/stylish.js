import _ from 'lodash';

const stylish = (tree, depth = 1, replacer = ' ', spacesCount = 4) => {
  const indentSize = depth * spacesCount;
  const currentIndent = replacer.repeat(indentSize - 2);
  const bracketIndent = replacer.repeat((depth - 1) * spacesCount);

  const outputValue = (value, innerDepth) => {
    if (_.isObject(value)) {
      const entries = Object.entries(value)
        .map(([key, val]) => `${replacer.repeat(innerDepth * spacesCount)}${key}: ${outputValue(val, innerDepth + 1)}`);
      return `{\n${entries.join('\n')}\n${replacer.repeat((innerDepth - 1) * spacesCount)}}`;
    }
    return value;
  };

  const result = tree.map((node) => {
    switch (node.status) {
      case 'deleted':
        return `${currentIndent}- ${node.key}: ${outputValue(node.value, depth + 1)}`;
      case 'added':
        return `${currentIndent}+ ${node.key}: ${outputValue(node.value, depth + 1)}`;
      case 'nested':
        return `${currentIndent} ${node.key}: ${stylish(node.children, depth + 1)}`;
      case 'changed':
        return `${currentIndent}- ${node.key}: ${outputValue(node.oldValue, depth + 1)}\n${currentIndent}+ ${node.key}: ${outputValue(node.newValue, depth + 1)}`;
      case 'unchanged':
        return `${currentIndent}  ${node.key}: ${outputValue(node.value, depth + 1)}`;
      default:
        throw new Error(`No value: ${node.status}`);
    }
  });
  return `{\n${result.join('\n')}\n${bracketIndent}}`;
};

export default stylish;
