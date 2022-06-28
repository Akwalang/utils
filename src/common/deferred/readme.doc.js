export default (pkg, meta, types) => ({
  title: 'common.deferred',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Create an instance of Promise which can be resolved/rejected from outside` },
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
            content: `import deferred from '${meta.npm.name}/common/deferred';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'deferred([callback])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'callback',
              type: '(resolve, reject) => void',
              description: 'array of source data',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'Promise<T> & { resolve: <T>(value: T | PromiseLike<T>) => void, reject: (reason?: any) => void }\n\n',
            description: 'Instance of Promise with methods resolve and reject',
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
              const defer = deferred();

              setTimeout(() => defer.resolve('Some value'), 1000);

              await defer;
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
              "Some value'
            `,
          },
        },
      ],
    },
  ],
});
