module.exports = (pkg, meta, types) => ({
  title: 'array.deduplicate',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Create dictionary object and check is key with taken id exists in it.` },
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
            content: `import { deduplicate } from '${meta.npm.name}/array/deduplicateUsingMap';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'deduplicate(array[, getId = v => v])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'array',
              type: 'T[]',
              description: 'array of values',
            },
            {
              name: 'getId',
              type: '(v: T) => number | string',
              description: 'function returns item id',
              defaultValue: 'v => v',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: 'T[]',
            description: 'array of uniq values',
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
              const list = [
                { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 },
                { value: 2 }, { value: 3 }, { value: 3 },
              ];

              const comparator = (v) => v.value;

              deduplicate(list, comparator);
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
              [{ "value": 1 }, { "value": 2 }, { "value": 3 }, { "value": 4 }]
            `,
          },
        },
      ],
    },
  ],
});
