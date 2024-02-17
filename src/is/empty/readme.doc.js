module.exports = (pkg, meta, types) => ({
  title: 'is.empty',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Checks is value an empty.` },
            { text: `It will return true in strait mode if passed: null, undefined, an empty array or an empty object.` },
            { text: `And will return true in not strait mode event if passed: an array or object with empty values.` },
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
            content: `import { isEmpty } from '${meta.npm.name}/is/empty';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'isEmpty(value[, strait = true])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'value',
              type: 'any',
              description: 'value to be checked',
            },
            {
              name: 'strait',
              type: 'boolean',
              description: 'in not strait mode arrays and object will be empty if his values are empty too',
              defaultValue: 'true',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'boolean',
            description: 'value is empty',
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
                isEmpty(''),
                isEmpty(null),
                isEmpty(undefined),
                isEmpty([]),
                isEmpty({}),

                isEmpty([null, undefined, [null, undefined], {}], false),
                isEmpty({ a: [], b: null, c: {} }, false),

                isEmpty(false),
                isEmpty([null]),
                isEmpty({ a: undefined }),
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
              [
                true, true, true, true, true,
                true, true,
                false, false, false
              ]
            `,
          },
        },
      ],
    },
  ],
});
