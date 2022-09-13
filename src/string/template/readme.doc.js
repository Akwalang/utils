module.exports = (pkg, meta, types) => ({
  title: 'string.template',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Replace <%= plaiceHolders %> by values from params object. It also support paths.` },
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
            content: `import template from '${meta.npm.name}/string/template';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'template(str[, params = {}])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'str',
              type: 'string',
              description: 'string for replace',
            },
            {
              name: 'params',
              type: '{}',
              description: 'object with values for replace',
              defaultValue: '{}',
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
              template(
                'Hi, <%= name %>. Can we have a call at <%= date.time %> <%= date.day %>?',
                { name : 'John', date: { time: '10:00', day: 'tomorrow' } }
              );
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
              "Hi, John. Can we have a call at 10:00 tomorrow?"
            `,
          },
        },
      ],
    },
  ],
});
