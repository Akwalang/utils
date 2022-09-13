import isArray from '.';

test('Is.array', () => {
  expect(isArray([])).toBe(true);
  expect(isArray({})).toBe(false);
  expect(isArray(null)).toBe(false);
  expect(isArray(1)).toBe(false);
  expect(isArray('qwe')).toBe(false);
});
