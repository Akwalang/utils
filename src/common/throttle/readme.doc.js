module.exports = (pkg, meta, types) => ({
  title: 'common.throttle',
  sections: [
    {
      type: types.SECTION_PARAGRAPH,
      content: [
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            { text: `Create function which accumulate call arguments and will run callback with accumulated arguments after timeout` },
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
            content: `import throttle from '${meta.npm.name}/common/throttle';`,
          },
        },
      ],
    },
    {
      type: types.SECTION_USAGE,
    },
    {
      type: types.SECTION_DESCRIPTION,
      title: 'throttle(callback, delay)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'callback',
              type: '(stack: T[]) => void',
              description: 'size of token',
            },
            {
              name: 'delay',
              type: 'number',
              description: 'time in ms',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: '((...args: T) => void) & { flush: () => void, destroy: () => void }',
            description: 'return function which accumulate call arguments and will run callback with accumulated arguments after timeout',
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
              const calls = [];
              const time = Date.now();

              const throttler = throttle((stack) => {
                calls.push({ time: Date.now() - time, stack });
              }, 400);

              await new Promise((resolve) => {
                setTimeout(() => throttler(1), 0);
                setTimeout(() => throttler(2), 200);

                // callback call at ~400ms

                setTimeout(() => throttler(3), 600);
                setTimeout(() => throttler(4), 800);
                setTimeout(() => throttler(5), 950);

                // callback call at ~1000ms

                setTimeout(() => resolve(calls), 1200);
              });
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
                { "time": 463, "stack": [[1], [2]] },
                { "time": 1055, "stack": [[3], [4], [5]] }
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
      title: 'throttle(callback, delay, delayMin, delayMax)',
      content: [
        {
          type: types.CONTENT_PARAMS,
          items: [
            {
              name: 'callback',
              type: '(stack: T[]) => void',
              description: 'size of token',
            },
            {
              name: 'delay',
              type: 'number',
              description: 'time in ms',
            },
            {
              name: 'delayMin',
              type: 'number',
              description: 'min delay in ms',
            },
            {
              name: 'delayMax',
              type: 'number',
              description: 'max delay in ms',
            },
          ],
        },
        {
          type: types.CONTENT_RETURN,
          result: {
            type: '((...args: T) => void) & { flush: () => void, destroy: () => void }',
            description: 'return function which accumulate call arguments and will run callback with accumulated arguments after timeout',
          },
        },
        {
          type: types.CONTENT_PARAGRAPH,
          items: [
            {
              text: `in this case throttler`,
            },
          ],
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
              const calls = [];
              const time = Date.now();

              const throttler = throttle((stack) => {
                calls.push({ time: Date.now() - time, stack });
              }, 80, 150, 400);

              await new Promise((resolve) => {
                setTimeout(() => throttler(1), 0);

                // callback call at ~150ms, delay ~150ms

                setTimeout(() => throttler(2), 400);
                setTimeout(() => throttler(3), 530);
                setTimeout(() => throttler(4), 600);

                // callback call at ~680ms, delay ~230ms

                setTimeout(() => throttler(5), 800);
                setTimeout(() => throttler(6), 940);
                setTimeout(() => throttler(7), 1020);
                setTimeout(() => throttler(8), 1090);
                setTimeout(() => throttler(9), 1150);
                setTimeout(() => throttler(10), 1170);

                // callback call at ~1200ms, delay ~400ms

                setTimeout(() => throttler(11), 1210);

                // callback call at ~1390ms, delay ~150ms

                setTimeout(() => resolve(calls), 1500);
              });
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
                { "time": 178,  "stack": [[1]] },
                { "time": 701,  "stack": [[2], [3], [4]] },
                { "time": 1208, "stack": [[5], [6], [7], [8], [9], [10]] },
                { "time": 1412, "stack": [[11]] }
              ]
            `,
          },
        },
      ],
    },
  ],
});
