export default (pkg, meta, types) => ({
  title: 'array.union',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Concat arrays into one and remove duplicate items` },
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
            content: `import union from '${meta.npm.name}/array/union';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'union([comparator = DEFAULT_COMPARATOR, ]...arrays)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'comparator',
              type: '(a: T, b: T) => boolean',
              description: 'function to compare values',
              defaultValue: '(a, b) => a === b || isNaN(a) && isNaN(b)',
            },
            {
              name: 'arrays',
              type: 'T[][]',
              description: 'arrays of values',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'T[]',
            description: 'Joined array with unique items',
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
              const a = [{ value: 1 }, { value: 2 }, { value: 3 }];
              const b = [{ value: 3 }, { value: 1 }, { value: 4 }];
              const c = [{ value: 4 }, { value: 4 }, { value: 3 }, { value: 2 }, { value: 5 }];

              const comparator = (a, b) => a.value === b.value;

              union(comparator, a, b, c);
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
              [{ "value": 1 }, { "value": 2 }, { "value": 3 }, { "value": 4 }, { "value": 5 }]
            `,
          },
        },
      ],
    },
  ],
});
