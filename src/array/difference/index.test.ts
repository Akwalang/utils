import difference from '.';

test('Array.difference: default getter', () => {
  const a = [1, 2, 3, 4, 5];
  const b = [6, 7, 1, 2, 8];

  const diff = difference(a, b);

  expect(diff).toEqual([3, 4, 5]);
});

test('Array.difference: custom getter', () => {
  const a = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];
  const b = [{ value: 6 }, { value: 7 }, { value: 1 }, { value: 2 }, { value: 8 }];

  const diff = difference(a, b, item => item.value);

  expect(diff).toEqual([{ value: 3 }, { value: 4 }, { value: 5 }]);
});

test('Array.difference: custom comparator', () => {
  type Pair = [number, number];

  const a: Pair[] = [[4, 1], [5, 2], [2, 6]];
  const b: Pair[] = [[1, 4], [4, 8], [9, 3]];

  const diff = difference(a, b, (a: Pair, b: Pair) => a[0] * b[0] === a[1] * b[1]);

  expect(diff).toEqual([[5, 2]]);
});
