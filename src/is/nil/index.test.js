import isNil from './index.js';

test('Is.nil', () => {
  expect(isNil(undefined)).toBe(true);
  expect(isNil(null)).toBe(true);

  expect(isNil(0)).toBe(false);
  expect(isNil([])).toBe(false);
  expect(isNil({})).toBe(false);
  expect(isNil('')).toBe(false);
});
