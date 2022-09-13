module.exports = (pkg, meta, types) => ({
  title: 'path.stat',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Return deep copy of provided value` },
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
            content: `import stat from '${meta.npm.name}/path/stat';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'stat(value)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'path',
              type: 'string | string[]',
              description: 'path to directory or file',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'Promise<fs.Stats | null>',
            description: 'stats of entity or null on case of error',
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
              await stat([__dirname, 'test.txt']);
            `,
          },
        },
      ],
    },
  ],
});
