module.exports = (pkg, meta, types) => ({
  title: 'file.read',
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
            content: `import { read } from '${meta.npm.name}/file/read';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'read(path)',
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
              name: 'options',
              type: 'object | string',
              description: 'look at fs.readFile options parameter',
              defaultValue: `{ encoding: 'utf8' }`,
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'Promise<string | Buffer>',
            description: 'return content of file as string or buffer',
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
              await read([__dirname, './path/to/file.txt']);
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
              "Some text value"
            `,
          },
        },
      ],
    },
  ],
});
