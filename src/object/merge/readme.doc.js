module.exports = (pkg, meta, types) => ({
  title: 'object.merge',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Update first object by values from the second object. Array will not be merged only replaced.` },
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
            content: `import { merge } from '${meta.npm.name}/object/merge';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'merge(value)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'dest',
              type: 'Record<any, any>',
              description: 'target object',
            },
            {
              name: 'src',
              type: 'Record<any, any>',
              description: 'source object',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'Record<any, any>',
            description: 'dest object',
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
              const dest = {
                a: 1,
                b: {
                  c: [1, 2],
                  d: {
                    e: 15
                  }
                }
              };

              const src = {
                b: {
                  c: [3, 4],
                  d: {
                    f: true
                  }
                }
              };

              merge(dest, src);
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
              {
                "a": 1,
                "b": {
                  "c": [3, 4],
                  "d": {
                    "e": 15,
                    "f": true
                  }
                }
              }
            `,
          },
        },
      ],
    },
  ],
});
