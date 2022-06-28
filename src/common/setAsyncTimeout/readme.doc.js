export default (pkg, meta, types) => ({
  title: 'common.setAsyncTimeout',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Create Promise which will be resolved after setup delay` },
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
            content: `import setAsyncTimeout from '${meta.npm.name}/common/setAsyncTimeout';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'setAsyncTimeout(delay)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'delay',
              type: 'number',
              description: 'delay value in ms',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'Promise<undefined>',
            description: 'Promise which will be revealed after timeout',
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
              const start = Date.now();

              await setAsyncTimeout(500);

              const end = Date.now();

              end - start >= 500;
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
              true
            `,
          },
        },
      ],
    },
  ],
});
