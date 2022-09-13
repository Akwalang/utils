export default (pkg, meta, types) => ({
  title: 'path.resolve',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Check is path exists` },
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
            content: `import resolve from '${meta.npm.name}/path/resolve';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'resolve(...paths)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'paths',
              type: '(string | string[])[]',
              description: 'full or relative path values that can be wrapped into arrays',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'string',
            description: 'full path',
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
              resolve(__dirname, ['..', [['./path'], 'to']], [[['dir']]]);
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
              "C:\\projects\\utils\\path\\to\\dir"
            `,
          },
        },
      ],
    },
  ],
});
