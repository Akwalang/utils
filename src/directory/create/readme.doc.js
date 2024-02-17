module.exports = (pkg, meta, types) => ({
  title: 'directory.create',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Recursively create directory in provided path` },
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
            content: `import { create } from '${meta.npm.name}/directory/create';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'create(path)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'path',
              type: 'string | string[]',
              description: 'target path',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'Promise<void>',
            description: 'will be resolved after directories will be created',
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
              await create([__dirname, './new_folder_1/new_folder_2/new_folder_3']);
            `,
          },
        },
      ],
    },
  ],
});
