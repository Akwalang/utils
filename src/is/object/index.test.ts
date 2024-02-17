import { isObject } from '.';

test('Types.isObject', async () => {
  expect(isObject({})).toBe(true);
  expect(isObject([])).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject('qwerty')).toBe(false);
  expect(isObject(123)).toBe(false);
  expect(isObject(false)).toBe(false);
});
