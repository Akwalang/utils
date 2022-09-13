module.exports = (pkg, meta, types) => ({
  title: 'object.setter',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Return value in object by provided path` },
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
            content: `import setter from '${meta.npm.name}/object/setter';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'setter(data, path)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'data',
              type: 'object | any[]',
              description: 'object or array',
            },
            {
              name: 'path',
              type: 'string',
              description: 'path in js style of required value in income data. Array indexes can be avoid and it will works as method push',
            },
            {
              name: 'value',
              type: 'any',
              description: 'value for set',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'void',
            description: '',
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
              const data = {
                a: [
                  []
                ]
              };

              setter(data, 'a[1][].b.c', 'Some text');
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
                "a": [
                  [],
                  [
                    {
                      "b": {
                        "c": "Some text"
                      }
                    }
                  ]
                ]
              }
            `,
          },
        },
      ],
    },
  ],
});
