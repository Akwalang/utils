import chunk from './index.js';

test('Array.chunk', () => {
  const result = chunk([1, 2, 3, 4, 5, 6, 7], 2);

  expect(result).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
});
