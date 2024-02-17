module.exports = (pkg, meta, types) => ({
  title: 'array.createSorter',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Create sorter function which can be passed into array.prototype.sort method.` },
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
            content: `import { createSorter } from '${meta.npm.name}/array/createSorter';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'createSorter([key = null[, dir = \'asc\']])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'key',
              type: 'null | string | number',
              description: 'path to value of object or null (values as is)\n\nNotes: path works slowly, better use function',
              defaultValue: 'null',
            },
            {
              name: 'dir',
              type: 'asc | desc',
              description: 'sort direction',
              defaultValue: 'asc',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: '(a: T, b: T) => number',
            description: 'default sort function for top level values with asc direction',
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
              ['b', 'e', 'c', 'a', 'd'].sort(createSorter(null, 'desc'));
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
              ["e", "d", "c", "b", "a"]
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
      title: 'createSorter(key[, dir = \'asc\']])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'key',
              type: 'function',
              description: 'function returns value for compare',
            },
            {
              name: 'dir',
              type: 'asc | desc',
              description: 'sort direction',
              defaultValue: 'asc',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: '(a: T, b: T) => number',
            description: 'sort function for returned values with applied direction',
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
              [15, 1, 7, 12, 19].sort(createSorter(v => v % 10));
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
              [1, 12, 15, 7, 19]
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
      title: 'createSorter(keys[, dirs = \'asc\'])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'keys',
              type: 'string',
              description: 'paths to value of object separated by commas',
            },
            {
              name: 'dirs',
              type: 'string | (asc | desc)[]',
              description: 'sort directions array or string separated by commas, in case of missing corresponding value it will always take the first direction',
              defaultValue: 'asc',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: '(a: T, b: T) => number',
            description: 'sort function for multiple values with applied directions',
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
                { type: 'glass', count: 5 },
                { type: 'cup', count: 8 },
                { type: 'dish', count: 10 },
                { type: 'cup', count: 3 },
                { type: 'glass', count: 2 },
                { type: 'cup', count: 5 },
              ];

              const sorter = createSorter('count, type', 'asc, desc');

              list.sort(sorter);
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
              [
                { "type": "glass", "count": 2 },
                { "type": "cup",   "count": 3 },
                { "type": "glass", "count": 5 },
                { "type": "cup",   "count": 5 },
                { "type": "cup",   "count": 8 },
                { "type": "dish",  "count": 10 }
              ]
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
      title: 'createSorter(keys[, dirs = \'asc\'])',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'keys',
              type: '(string | function)[]',
              description: 'an array of paths to value or functions that returns values for sort',
            },
            {
              name: 'dirs',
              type: 'string | (asc | desc)[]',
              description: 'sort directions array or string separated by commas, in case of missing corresponding value it will always take the first direction',
              defaultValue: 'asc',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: '(a: T, b: T) => number',
            description: 'sort function for multiple values with applied directions',
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
                { type: { category: { name: 'glass' } }, count: { total: 5, available: 1 } },
                { type: { category: { name: 'cup' } }, count: { total: 8, available: 3 } },
                { type: { category: { name: 'dish' } }, count: { total: 10, available: 4 } },
                { type: { category: { name: 'skillet' } }, count: { total: 5, available: 1 } },
                { type: { category: { name: 'cup' } }, count: { total: 5, available: 3 } },
                { type: { category: { name: 'glass' } }, count: { total: 2, available: 2 } },
                { type: { category: { name: 'vase' } }, count: { total: 5, available: 1 } },
                { type: { category: { name: 'cup' } }, count: { total: 5, available: 0 } },
              ];

              const sorter = createSorter(['count.total', 'count.available', item => item.type.category.name], 'asc, desc');

              list.sort(sorter);
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
              [
                { "type": { "category": { "name": "glass" } },   "count": { "total": 2,  "available": 2 } },
                { "type": { "category": { "name": "cup" } },     "count": { "total": 5,  "available": 3 } },
                { "type": { "category": { "name": "glass" } },   "count": { "total": 5,  "available": 1 } },
                { "type": { "category": { "name": "skillet" } }, "count": { "total": 5,  "available": 1 } },
                { "type": { "category": { "name": "vase" } },    "count": { "total": 5,  "available": 1 } },
                { "type": { "category": { "name": "cup" } },     "count": { "total": 5,  "available": 0 } },
                { "type": { "category": { "name": "cup" } },     "count": { "total": 8,  "available": 3 } },
                { "type": { "category": { "name": "dish" } },    "count": { "total": 10, "available": 4 } }
              ]
            `,
          },
        },
      ],
    },
  ],
});
