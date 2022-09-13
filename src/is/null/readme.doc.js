module.exports = (pkg, meta, types) => ({
  title: 'is.null',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Checks if value is null` },
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
            content: `import isNull from '${meta.npm.name}/is/null';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'isNull(value)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'value',
              type: 'any',
              description: 'value to be checked',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'boolean',
            description: 'value is null',
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
              [
                isNull(null),

                isNull(undefined),
                isNull(0),
                isNull(''),
                isNull(false),
              ]
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
              [true, false, false, false, false]
            `,
          },
        },
      ],
    },
  ],
});
