module.exports = (pkg, meta, types) => ({
  title: 'common.random',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Returns random number between 2 values` },
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
            content: `import { random } from '${meta.npm.name}/common/random';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'random(lower, upper[, floor = false])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'lower',
              type: 'number',
              description: 'lower border value',
            },
            {
              name: 'upper',
              type: 'number',
              description: 'upper border value',
            },
            {
              name: 'floor',
              type: 'false',
              description: 'remove decimal numbers',
              defaultValue: 'false',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'any',
            description: 'random number in range [lower, upper)',
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
              random(5, 9);
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
              6.965876254700356
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
      title: 'random(lower, upper[, floor = false])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'lower',
              type: 'number',
              description: 'lower border value',
            },
            {
              name: 'upper',
              type: 'number',
              description: 'upper border value',
            },
            {
              name: 'floor',
              type: 'true',
              description: 'remove decimal numbers',
              defaultValue: 'false',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'any',
            description: 'random floored number in range [lower, upper]',
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
              random(3, 7, true);
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
              7
            `,
          },
        },
      ],
    },
  ],
});
