import { isFunction } from '.';

test('Is.function', () => {
  expect(isFunction(function () {})).toBe(true);
  expect(isFunction(() => {})).toBe(true);
  expect(isFunction(new Function(''))).toBe(true);

  expect(isFunction(async () => {})).toBe(false);
  expect(isFunction({})).toBe(false);
  expect(isFunction([])).toBe(false);
});
