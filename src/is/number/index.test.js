import isNumber from './index.js';

test('Is.number', () => {
  expect(isNumber(125)).toBe(true);
  expect(isNumber('function')).toBe(false);
  expect(isNumber(function () {})).toBe(false);
  expect(isNumber({})).toBe(false);
  expect(isNumber([])).toBe(false);
});
