import binarySearch from './index.js';

test('Array.binarySearch: middle', () => {
  const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);

  expect(result).toBe(4);
});

test('Array.binarySearch: first half', () => {
  const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4);

  expect(result).toBe(3);
});

test('Array.binarySearch: second half', () => {
  const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8);

  expect(result).toBe(7);
});

test('Array.binarySearch: start', () => {
  const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);

  expect(result).toBe(0);
});

test('Array.binarySearch: end', () => {
  const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);

  expect(result).toBe(9);
});

test('Array.binarySearch: missing', () => {
  const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -5);

  expect(result).toBe(-1);
});

test('Array.binarySearch: missing incorrect', () => {
  const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'a');

  expect(result).toBe(-1);
});

test('Array.binarySearch: custom comparator', () => {
  const result = binarySearch([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
  ], item => 7 - item.value);

  expect(result).toBe(6);
});
