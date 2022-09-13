module.exports = (pkg, meta, types) => ({
  title: 'array.difference',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Return array of different items in 2 arrays` },
          ],
        },
      ],
    },
    {
      type: types.SECTION_IMPORT,
      title: 'Import',
      content: [
        {
          type: types.CONTENT_SCRIPT,
          script: {
            type: types.SCRIPT_JS,
            content: `import difference from '${meta.npm.name}/array/difference';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'difference(a, b[, comparator = DEFAULT_COMPARATOR])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'a',
              type: 'T[]',
              description: 'array of values',
            },
            {
              name: 'b',
              type: 'T[]',
              description: 'array of values',
            },
            {
              name: 'comparator',
              type: '(a: T, b: T) => boolean',
              description: 'function to compare values',
              defaultValue: '(a, b) => a === b || isNaN(a) && isNaN(b)',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'T[]',
            description: 'array of different values',
          },
        },
      ],
    },
    {
      type: types.SECTION_EXAMPLE,
      title: 'Example',
      content: [
        {
          type: types.CONTENT_SCRIPT,
          script: {
            type: types.SCRIPT_JS,
            content: `
              const a = [1, 2, 3, 4, 5];
              const b = [6, 7, 1, 2, 8];

              difference(a, b);
            `,
          },
        },
      ],
    },
    {
      type: types.SECTION_RESULT,
      title: 'Result',
      content: [
        {
          type: types.CONTENT_SCRIPT,
          script: {
            type: types.SCRIPT_JSON,
            content: `
              [3, 4, 5]
            `,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'difference(a, b, getValue)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'a',
              type: 'T[]',
              description: 'array of values',
            },
            {
              name: 'b',
              type: 'T[]',
              description: 'array of values',
            },
            {
              name: 'getValue',
              type: '(item: T) => any',
              description: 'function returns value from items of both arrays for compare',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'T[]',
            description: 'array of different values',
          },
        },
      ],
    },
    {
      type: types.SECTION_EXAMPLE,
      title: 'Example',
      content: [
        {
          type: types.CONTENT_SCRIPT,
          script: {
            type: types.SCRIPT_JS,
            content: `
              const a = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];
              const b = [{ value: 6 }, { value: 7 }, { value: 1 }, { value: 2 }, { value: 8 }];

              difference(a, b, item => item.value);
            `,
          },
        },
      ],
    },
    {
      type: types.SECTION_RESULT,
      title: 'Result',
      content: [
        {
          type: types.CONTENT_SCRIPT,
          script: {
            type: types.SCRIPT_JSON,
            content: `
              [{ "value": 3 }, { "value": 4 }, { "value": 5 }]
            `,
          },
        },
      ],
    },
  ],
});
