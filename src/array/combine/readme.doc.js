module.exports = (pkg, meta, types) => ({
  title: 'array.combine',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Create object based on 2 arrays: keys and values.` },
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
            content: `import combine from '${meta.npm.name}/array/combine';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'combine(keys, values)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'keys',
              type: '(string | number | symbol)[]',
              description: 'array of keys',
              defaultValue: null,
            },
            {
              name: 'values',
              type: 'any[]',
              description: 'array of values',
              defaultValue: null,
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'Record<string | number | symbol, any>',
            description: 'object with first array values as keys and second array values as values',
            defaultValue: null,
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
              combine(
                ['first', 'second', 'third'],
                [1, null, true, 'mismatch value']
              );
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
              { "first": 1, "second": null, "third": true }
            `,
          },
        },
      ],
    },
  ],
});
