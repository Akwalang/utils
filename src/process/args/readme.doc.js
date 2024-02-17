module.exports = (pkg, meta, types) => ({
  title: 'process.args',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Get args from process parameters` },
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
            content: `import { args } from '${meta.npm.name}/process/args';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'args(argv)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'meta',
              type: 'string[]',
              description: 'process arguments (process.argv)',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'object',
            description: 'object of parameters with values processed by JSON.parse method',
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
              args([
                '',
                '',
                '-param1=value',
                '--param2',
                'param3=10',
                'param4=[true,false,true]',
                'param5=false'
              ]);
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
                "param1": "value",
                "param2": true,
                "param3": 10,
                "param4": [true, false, true],
                "param5": false
              }
            `,
          },
        },
      ],
    },
  ],
});
