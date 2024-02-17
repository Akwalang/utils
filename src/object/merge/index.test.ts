import { merge } from '.';

test('Object.merge', () => {
  const dest = {
    a: {
      b: 1,
      c: false,
      d: {
        e: [1, 2, 3],
      },
    },
    f: true,
    g: null,
  };

  const src = {
    a: {
      b: 2,
      h: NaN,
      d: {
        i: 'qwerty',
        j: {
          k: {},
        }
      },
    },
    f: false,
    g: {
      l: Infinity,
    },
  };

  merge(dest, src);

  expect(dest).toEqual({
    a: {
      b: 2,
      c: false,
      h: NaN,
      d: {
        e: [1, 2, 3],
        i: 'qwerty',
        j: {
          k: {},
        },
      },
    },
    f: false,
    g: {
      l: Infinity,
    },
  });
});
