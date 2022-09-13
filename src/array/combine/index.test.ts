import combine from '.';

test('Array.combine: same length', () => {
  const result = combine(['a', 'b', 'c'], [1, 2, 3]);

  expect(result).toEqual({ a: 1, b: 2, c: 3 });
});

test('Array.combine: values less', () => {
  const result = combine(['a', 'b', 'c'], [1, 2]);

  expect(result).toEqual({ a: 1, b: 2, c: undefined });
});

test('Array.combine: keys length', () => {
  const result = combine(['a', 'b'], [1, 2, 3]);

  expect(result).toEqual({ a: 1, b: 2 });
});
