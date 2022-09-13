module.exports = (pkg, meta, types) => ({
  title: 'is.equal',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Make deep comparison of two values` },
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
            content: `import isEqual from '${meta.npm.name}/is/equal';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'isNil(value)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'a',
              type: 'any',
              description: 'first value to compare',
            },
            {
              name: 'b',
              type: 'any',
              description: 'second value to compare',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'boolean',
            description: 'result of comparing',
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
              const now = new Date();

              const a = {
                a: 1,
                b: [1, true, { c: NaN }],
                c: new Date(+now),
              };

              const b = {
                a: 1,
                b: [1, true, { c: NaN }],
                c: new Date(+now),
              };

              isEqual(a, b);
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
