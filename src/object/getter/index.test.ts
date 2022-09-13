import getter from '.';

test('Object.getter: value', () => {
  const data = {
    a: {
      b: {
        c: [
          { d: 15 },
        ],
      },
    },
  };

  const result = getter(data, 'a.b.c[0].d');

  expect(result).toBe(15);
});

test('Object.getter: undefined', () => {
  const data = {
    a: {
      b: {
        c: [
          { d: 15 },
        ],
      },
    },
  };

  const result = getter(data, 'a.b.k.c[0].d');

  expect(result).toBe(undefined);
});
