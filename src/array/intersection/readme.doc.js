module.exports = (pkg, meta, types) => ({
  title: 'array.intersection',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Find elements which exists in every array` },
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
            content: `import intersection from '${meta.npm.name}/array/intersection';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'intersection([comparator = DEFAULT_COMPARATOR, ]...arrays)',
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
              const b = [{ value: 3 }, { value: 2 }, { value: 5 }];
              const c = [{ value: 1 }, { value: 5 }, { value: 2 }, { value: 4 }]

              intersection((a, b) => a.value === b.value, a, b, c);
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
              [{ "value": 2 }, { "value": 5 }]
            `,
          },
        },
      ],
    },
  ],
});
