module.exports = (pkg, meta, types) => ({
  title: 'array.deduplicate',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Deduplicate elements in array comparing items one to each other.` },
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
            content: `import deduplicate from '${meta.npm.name}/array/deduplicate';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'deduplicate(array[, comparator = DEFAULT_COMPARATOR])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'array',
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
            description: 'array of uniq values',
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
              const list = [
                { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 },
                { value: 2 }, { value: 3 }, { value: 3 },
              ];

              const comparator = (a, b) => a.value === b.value;

              deduplicate(list, comparator);
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
              [{ "value": 1 }, { "value": 2 }, { "value": 3 }, { "value": 4 }]
            `,
          },
        },
      ],
    },
  ],
});
