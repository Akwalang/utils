import isNull from './index.js';

test('Is.null', () => {
  expect(isNull(null)).toBe(true);
  expect(isNull(0)).toBe(false);
  expect(isNull(undefined)).toBe(false);
  expect(isNull([])).toBe(false);
});
