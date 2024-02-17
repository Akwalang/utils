module.exports = (pkg, meta, types) => ({
  title: 'array.matchRange',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Calculate range of values based on items in the passed array` },
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
            content: `import { matchRange } from '${meta.npm.name}/array/matchRange';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'matchRange(array[, fallback = [null, null] [, getValue = v => v]])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'array',
              type: 'any',
              description: 'array of values',
            },
            {
              name: 'fallback',
              type: 'F extends any',
              description: 'return value in case of passed empty array',
              defaultValue: '[null, null]',
            },
            {
              name: 'getValue',
              type: '(v: any) => number',
              description: 'function return value to compare',
              defaultValue: 'v => v',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: '[number, number] | F',
            description: 'array with min and max value or fallback argument in case of empty array',
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
              const list = [{ value: 57 }, { value: 41 }, { value: 9 }, { value: 93 }, { value: 12 }];

              matchRange(list, null, item => item.value);
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
              [9, 93]
            `,
          },
        },
      ],
    },
  ],
});
