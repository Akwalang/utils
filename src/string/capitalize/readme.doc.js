export default (pkg, meta, types) => ({
  title: 'string.capitalize',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Apply uppercase to first letter of string` },
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
            content: `import capitalize from '${meta.npm.name}/string/capitalize';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'capitalize(value)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'value',
              type: 'string',
              description: 'string to be capitalized',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'string',
            description: 'capitalized string',
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
              capitalize('hello, world!');
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
              "Hello, world!"
            `,
          },
        },
      ],
    },
  ],
});
