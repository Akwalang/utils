import isUndefined from './index.js';

test('Is.undefined', () => {
  const result = isUndefined();

  expect(isUndefined(undefined)).toBe(true);
  expect(isUndefined()).toBe(true);
  expect(isUndefined(null)).toBe(false);
  expect(isUndefined([])).toBe(false);
});
