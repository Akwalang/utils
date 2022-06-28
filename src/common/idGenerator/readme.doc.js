export default (pkg, meta, types) => ({
  title: 'common.idGenerator',
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
            content: `import idGenerator from '${meta.npm.name}/common/idGenerator';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'idGenerator()',
      content: [
        {
          type: types.CONTENT_RETURN,
          result: {
            type: '() => number',
            description: 'function return next id number',
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
              const nextId = idGenerator();

              [nextId(), nextId(), nextId(), nextId()];
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
              [1, 2, 3, 4]
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
      title: 'idGenerator(prefix, postfix?)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'prefix',
              type: 'string | null',
              description: 'id prefix',
            },
            {
              name: 'postfix',
              type: 'string',
              description: 'id postfix',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: '() => number',
            description: 'function return next id string',
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
              const nextId = idGenerator(null, '-end');

              [nextId(), nextId(), nextId(), nextId()]
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
              ["1-end", "2-end", "3-end", "4-end"]
            `,
          },
        },
      ],
    },
  ],
});
