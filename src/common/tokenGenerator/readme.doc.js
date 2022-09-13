module.exports = (pkg, meta, types) => ({
  title: 'common.tokenGenerator',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Generate string with required length and random chars` },
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
            content: `import tokenGenerator from '${meta.npm.name}/common/tokenGenerator';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'tokenGenerator(length[, letters = LETTERS])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'length',
              type: 'number',
              description: 'size of token',
            },
            {
              name: 'letters',
              type: 'string',
              description: 'string with chars for pick',
              defaultValue: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'string',
            description: 'string with random chars',
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
              tokenGenerator(15, '0123');
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
              "010310123203330"
            `,
          },
        },
      ],
    },
  ],
});
