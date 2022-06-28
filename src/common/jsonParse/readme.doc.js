export default (pkg, meta, types) => ({
  title: 'common.jsonParse',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Create function which return on every call next number or next string` },
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
            content: `import jsonParse from '${meta.npm.name}/common/jsonParse';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'jsonParse(value)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'value',
              type: 'string',
              description: 'json string to be parsed',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'any',
            description: 'parsed value or incoming value in case of parse error',
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
              jsonParse('[1, "a", {}]');
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
              [1, "a", {}]
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
      title: 'jsonParse(string, fallback)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'value',
              type: 'string',
              description: 'json string to be parsed',
            },
            {
              name: 'fallback',
              type: 'any',
              description: 'json string to be parsed',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'any',
            description: 'parsed value or fallback value',
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
              jsonParse('{INCORRECT JSON VALUE]', undefined);
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
              undefined
            `,
          },
        },
      ],
    },
  ],
});
