import { isString } from '.';

test('Is.string', () => {
  expect(isString('function')).toBe(true);
  expect(isString(125)).toBe(false);
  expect(isString(function () {})).toBe(false);
  expect(isString({})).toBe(false);
  expect(isString([])).toBe(false);
});
