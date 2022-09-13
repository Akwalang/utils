module.exports = (pkg, meta, types) => ({
  title: 'process.getStack',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Get files list of call stack till the place where it was called` },
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
            content: `import getStack from '${meta.npm.name}/process/getStack';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'getStack([from[, to]])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'from',
              type: 'number',
              description: 'start index for slice',
            },
          ],
        },
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'to',
              type: 'number',
              description: 'end index for slice',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: '{ file: string }[]',
            description: 'list of previous call files',
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
              getStack(0, 4);
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
                { "file": "C:/projects/utils/src/process/getStack/mock/4_fourth.js" },
                { "file": "C:/projects/utils/src/process/getStack/mock/3_third.js" },
                { "file": "C:/projects/utils/src/process/getStack/mock/2_second.js" },
                { "file": "C:/projects/utils/src/process/getStack/mock/1_first.js" }
              ]
            `,
          },
        },
      ],
    },
  ],
});
