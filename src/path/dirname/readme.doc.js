module.exports = (pkg, meta, types) => ({
  title: 'path.dirname',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Get dirname from import.meta data` },
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
            content: `import dirname from '${meta.npm.name}/path/dirname';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'dirname(meta)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'meta',
              type: '{ url: string }',
              description: 'import.meta data',
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
              dirname(import.meta);
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
              "C:\\projects\\utils\\src\\path\\dirname"
            `,
          },
        },
      ],
    },
  ],
});
