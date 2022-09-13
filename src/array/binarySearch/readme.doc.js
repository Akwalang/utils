module.exports = (pkg, meta, types) => ({
  title: 'array.binarySearch',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Search element in sorted array using binary search algorithm.` },
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
            content: `import binarySearch from '${meta.npm.name}/array/binarySearch';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'binarySearch(array, value[, side = 0])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'array',
              type: 'T[]',
              description: 'asc sorted array',
              defaultValue: null,
            },
            {
              name: 'value',
              type: 'any | <T>(item: T) => boolean',
              description: 'searching value or function returns number from -Infinity to Infinity',
              defaultValue: null,
            },
            {
              name: 'side',
              type: '-1 | 0 | 1',
              description: 'search side: _-1_ - left, _0_ - first found, _1_ - right',
              defaultValue: '0',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'number',
            description: 'index of value in array',
            defaultValue: '-1',
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
              const array = [
                { value: 1 },
                { value: 1 },
                { value: 2 },
                { value: 2 },
                { value: 2 },
                { value: 2 },
                { value: 3 },
                { value: 3 },
                { value: 3 },
                { value: 3 },
              ];

              binarySearch(array, item => {
                if (item.value < 3) return  1;
                if (item.value > 3) return -1;

                return 0;
              }, -1);
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
              6
            `,
          },
        },
      ],
    },
  ],
});
