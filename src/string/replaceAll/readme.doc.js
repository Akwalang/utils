module.exports = (pkg, meta, types) => ({
  title: 'string.replaceAll',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `In string replace every substring on replacer` },
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
            content: `import { replaceAll } from '${meta.npm.name}/string/replaceAll';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'replaceAll(value, sub, replacer)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'value',
              type: 'string',
              description: 'string for replace',
            },
            {
              name: 'sub',
              type: 'string',
              description: 'what should be replaced',
            },
            {
              name: 'replacer',
              type: 'string',
              description: 'what will replace',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'string',
            description: 'string after replaces',
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
              replaceAll('can you can a can?', 'can', 'dog');
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
              "dog you dog a dog?"
            `,
          },
        },
      ],
    },
  ],
});
