import { setter } from '.';

test('Object.setter: top set', () => {
  const target = {
    a: 1,
    b: {
      c: [],
    },
  };

  setter(target, 'd', false);

  expect(target).toEqual({
    a: 1,
    b: {
      c: [],
    },
    d: false,
  });
});

test('Object.setter: deep set', () => {
  const target = {
    a: 1,
    b: {
      c: [
        { n: 1 },
        { n: 2 },
        { n: 3 },
      ],
    },
  };

  setter(target, 'b.c[1].n', 8);

  expect(target).toEqual({
    a: 1,
    b: {
      c: [
        { n: 1 },
        { n: 8 },
        { n: 3 },
      ],
    },
  });
});

test('Object.setter: deep set make path', () => {
  const target = {};

  setter(target, 'b.c[1].d.e', true);

  expect(target).toEqual({
    b: {
      c: [
        ,
        {
          d: {
            e: true,
          },
        },
      ],
    },
  });
});

test('Object.setter: deep set path with unnamed index', () => {
  const target = {
    a: [1, 2, 3],
  };

  setter(target, 'a[].b', 4);

  expect(target).toEqual({
    a: [1, 2, 3, { b: 4 }],
  });
});

test('Object.setter: deep set path with unnamed index at the end', () => {
  const target = {
    a: [1, 2, 3],
  };

  setter(target, 'a[].b', 4);

  expect(target).toEqual({
    a: [1, 2, 3, { b: 4 }],
  });
});

test('Object.setter: arrays set', () => {
  const target: any[] = [];

  setter(target, '[][][][]', 4);

  expect(target).toEqual([[[[4]]]]);
});

test('Object.setter: deep set path with unnamed index at the end', () => {
  const target = {
    a: [1, 2, 3],
  };

  setter(target, 'a[].b[]', 4);

  expect(target).toEqual({
    a: [1, 2, 3, { b: [4] }],
  });
});
