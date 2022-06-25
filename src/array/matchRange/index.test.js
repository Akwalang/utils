import matchRange from './index.js';

test('Array.matchRange: default', () => {
  const range = matchRange([7, 16, 3, 86, 9, 65, 43]);

  expect(range).toEqual([3, 86]);
});

test('Array.matchRange: with getter', () => {
  const range = matchRange([
    { value: 57 },
    { value: 41 },
    { value: 9 },
    { value: 93 },
    { value: 12 },
  ], null, item => item.value);

  expect(range).toEqual([9, 93]);
});

test('Array.matchRange: default fallback', () => {
  const range = matchRange([]);

  expect(range).toEqual([null, null]);
});

test('Array.matchRange: custom fallback', () => {
  const range = matchRange([], null);

  expect(range).toEqual(null);
});
