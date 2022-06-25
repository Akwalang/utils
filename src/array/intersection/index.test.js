import intersection from './index.js';

test('Array.intersection: default comparator', () => {
  const result = intersection([1, 2, 3, 4, 5], [3, 2, 5], [1, 5, 4, 2]);

  expect(result).toEqual([2, 5]);
});

test('Array.intersection: custom comparator', () => {
  const result = intersection(
    (a, b) => a.value === b.value,
    [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
    ],
    [
      { value: 3 },
      { value: 2 },
      { value: 5 },
    ],
    [
      { value: 1 },
      { value: 5 },
      { value: 2 },
      { value: 4 },
    ]
  );

  expect(result).toEqual([{ value: 2 }, { value: 5 }]);
});
