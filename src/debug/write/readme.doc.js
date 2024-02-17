module.exports = (pkg, meta, types) => ({
  title: 'debug.write',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Stringify data and write it in the file.` },
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
            content: `import { write } from '${meta.npm.name}/debug/write';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'write(data[, name])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'data',
              type: 'any',
              description: 'debug data for write',
            },
            {
              name: 'name',
              type: 'string',
              description: 'name for debug file',
              defaultValue: '__filename',
            },
          ],
        },
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            {
              text: `Name of the result file will be matched by follow rule:`,
            },
            {
              text: `1. in case of missing argument "name" it will match file name of place where this function was called and remove extension`,
            },
            {
              text: `2. add to this file postfix .__debug__.json`,
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'Promise<undefined>',
            description: 'promise that will be resolved after write operation will be finished',
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
              await write([1, 'a', {}], 'get-users');
              // create file get-users.__debug__.json
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
            type: types.SCRIPT_JS,
            content: `
              undefined
            `,
          },
        },
      ],
    },
  ],
});
