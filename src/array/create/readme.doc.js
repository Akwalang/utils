module.exports = (pkg, meta, types) => ({
  title: 'array.create',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Create array with prefilled values.` },
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
            content: `import create from '${meta.npm.name}/array/create';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'create(from, to[, step = 1])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'from',
              type: 'number',
              description: 'start number',
              defaultValue: null,
            },
            {
              name: 'to',
              type: 'number',
              description: 'end number',
            },
            {
              name: 'step',
              type: 'number',
              description: 'step for match middle array items (number sign doesn\'t matter)',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'number[]',
            description: 'array of number from..to',
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
              create(3, -6, 2);
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
              [3, 1, -1, -3, -5]
            `,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'create(count[, map = index => index])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'count',
              type: 'number',
              description: 'count of items in new array',
              defaultValue: null,
            },
            {
              name: 'map',
              type: '(index: number) => T',
              description: 'function returns array items',
              defaultValue: 'index => index',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'T[]',
            description: 'array with setup length and matched values',
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
              create(4, i => 'item-' + i);
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
              ["item-0", "item-1", "item-2", "item-3"]
            `,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'create(count, asyncFunction)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'count',
              type: 'number',
              description: 'count of items in new array',
              defaultValue: null,
            },
            {
              name: 'asyncFunction',
              type: 'async (index: number) => T',
              description: 'async function returns array items',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'Promise<T[]>',
            description: 'promise of array with setup length and matched values',
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
              await create(4, async i => 'value-' + i);
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
              ["value-0", "value-1", "value-2", "value-3"]
            `,
          },
        },
      ],
    },
  ],
});
