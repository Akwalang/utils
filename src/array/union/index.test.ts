import { union } from '.';

test('Array.union: default comparator', () => {
  const result = union([1, 2, 3], [3, 1, 4], [4, 4, 3, 2, 5]);

  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('Array.union: custom comparator', () => {
  const result = union(
    (a) => a.value,
    [{ value: 1 }, { value: 2 }, { value: 3 }],
    [{ value: 3 }, { value: 1 }, { value: 4 }],
    [{ value: 4 }, { value: 4 }, { value: 3 }, { value: 2 }, { value: 5 }]
  );

  expect(result).toEqual([{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }]);
});
