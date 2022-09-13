export default (pkg, meta, types) => ({
  title: 'object.getter',
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
            content: `import getter from '${meta.npm.name}/object/getter';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'getter(data, path)',
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
              description: 'path in js style of required value in income data',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'T',
            description: 'value from data or undefined',
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
                  [],
                  [
                    {
                      b: { c: 15 }
                    }
                  ]
                ]
              };

              [
                getter(data, 'a[0][0].b.c'),
                getter(data, 'a[0][1].b.c')
              ];
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
            type: types.SCRIPT_JS,
            content: `
              [undefined, 15]
            `,
          },
        },
      ],
    },
  ],
});
