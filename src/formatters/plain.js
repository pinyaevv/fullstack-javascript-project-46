import _ from 'lodash';

const funcStringfy = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return String(value);
};

const structure = {
  root: (node, iter) => node.children.flatMap((child) => iter(child)).join('\n'),
  nested: (node, path, iter) => node.children.flatMap((child) => iter(child, path)).join('\n'),
  deleted: (node, path) => `Property '${path}' was removed`,
  // в deleted не понимаю, почему если я не прописываю узел 'node', то данная строка не работает.
  // он ведь в deleted не используется на прямую?
  added: (node, path) => `Property '${path}' was added with value: ${funcStringfy(node.value)}`,
  changed: (node, path) => `Property '${path}' was updated. From ${funcStringfy(node.oldValue)} to ${funcStringfy(node.newValue)}`,
  unchanged: () => [],
  default: (node) => { throw new Error(`Unknown node type: ${node.status}`); },
};

const plain = (tree) => {
  const iter = (node, hierarchy) => {
    if (Array.isArray(node)) {
      return node.flatMap((child) => iter(child, hierarchy)).join('\n');
    }

    const newHierarchy = hierarchy ? `${hierarchy}.${node.key}` : node.key;

    return structure[node.status](node, newHierarchy, iter);
  };

  return iter(tree);
};

export default plain;
