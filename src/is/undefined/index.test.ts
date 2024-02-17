import { isUndefined } from '.';

test('Is.undefined', () => {
  expect(isUndefined(undefined)).toBe(true);
  expect(isUndefined(null)).toBe(false);
  expect(isUndefined([])).toBe(false);
});
