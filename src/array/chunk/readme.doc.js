export default (pkg, meta, types) => ({
  title: 'array.chunk',
  sections: [
    {
      type: types.SECTION_DESCRIPTION,
      title: 'chunk(array, size)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'array',
              type: 'T[]',
              description: 'array for split on chunks',
              defaultValue: null,
            },
            {
              name: 'size',
              type: 'number',
              description: 'chunk size',
              defaultValue: null,
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'T[][]',
            description: 'array of arrays with income array values and setup length',
            defaultValue: null,
          },
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
            content: `import chunk from '${meta.npm.name}/array/chunk';`,
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
              chunk([1, 2, 3, 4, 5], 2);
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
              [[1, 2], [3, 4], [5]]
            `,
          },
        },
      ],
    },
  ],
});
