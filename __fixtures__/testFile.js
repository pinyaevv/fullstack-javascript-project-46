const jsonFiles = [
  {
    key: 'common',
    children: [
      {
        key: 'follow',
        value: false,
        children: [],
        status: 'added',
      },
      {
        key: 'setting1',
        value: 'Value 1',
        children: [],
        status: 'unchanged',
      },
      {
        key: 'setting2',
        value: 200,
        children: [],
        status: 'deleted',
      },
      {
        key: 'setting3',
        oldValue: true,
        newValue: null,
        children: [],
        status: 'changed',
      },
      {
        key: 'setting4',
        value: 'blah blah',
        children: [],
        status: 'added',
      },
      {
        key: 'setting5',
        value: {
          key5: 'value5',
        },
        children: [],
        status: 'added',
      },
      {
        key: 'setting6',
        children: [
          {
            key: 'doge',
            children: [
              {
                key: 'wow',
                oldValue: '',
                newValue: 'so much',
                children: [],
                status: 'changed',
              },
            ],
            status: 'nested',
          },
          {
            key: 'key',
            value: 'value',
            children: [],
            status: 'unchanged',
          },
          {
            key: 'ops',
            value: 'vops',
            children: [],
            status: 'added',
          },
        ],
        status: 'nested',
      },
    ],
    status: 'nested',
  },
  {
    key: 'group1',
    children: [
      {
        key: 'baz',
        oldValue: 'bas',
        newValue: 'bars',
        children: [],
        status: 'changed',
      },
      {
        key: 'foo',
        value: 'bar',
        children: [],
        status: 'unchanged',
      },
      {
        key: 'nest',
        oldValue: {
          key: 'value',
        },
        newValue: 'str',
        children: [],
        status: 'changed',
      },
    ],
    status: 'nested',
  },
  {
    key: 'group2',
    value: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
    children: [],
    status: 'deleted',
  },
  {
    key: 'group3',
    value: {
      deep: {
        id: {
          number: 45,
        },
      },
      fee: 100500,
    },
    children: [],
    status: 'added',
  },
];

export default jsonFiles;
