export default (pkg, meta, types) => ({
  title: 'file.write',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Return content of file` },
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
            content: `import write from '${meta.npm.name}/file/write';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'write(path)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'path',
              type: 'string | string[]',
              description: 'path to file',
            },
            {
              name: 'data',
              type: 'string | ArrayBuffer',
              description: 'look at fs.writeFile data parameter',
            },
            {
              name: 'options',
              type: 'object',
              description: 'look at fs.writeFile options parameter',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'Promise<void>',
            description: 'will be resolved after the file will be written',
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
              await write([__dirname, './path/to/file.txt'], 'New text content');
            `,
          },
        },
      ],
    },
  ],
});
