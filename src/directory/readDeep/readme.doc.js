module.exports = (pkg, meta, types) => ({
  title: 'directory.readDeep',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Return full paths of deep directories and files inside of target folder` },
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
            content: `import { readDeep } from '${meta.npm.name}/directory/readDeep';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'readDeep(path)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'path',
              type: 'string | string[]',
              description: 'path to directory',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'Promise<string[]>',
            description: 'list of full paths of deep inner directories and files',
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
              await clear(__dirname);
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
              [
                "C:\\projects\\utils\\src\\directory\\readDeep\\index.test.ts",
                "C:\\projects\\utils\\src\\directory\\readDeep\\index.ts",
                "C:\\projects\\utils\\src\\directory\\readDeep\\mock\\deep_file.txt',
                "C:\\projects\\utils\\src\\directory\\readDeep\\mock',
                "C:\\projects\\utils\\src\\directory\\readDeep\\readme.doc.js"
              ]
            `,
          },
        },
      ],
    },
  ],
});
