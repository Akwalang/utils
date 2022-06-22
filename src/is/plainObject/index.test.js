import isPlainObject from './index.js';

test('Is.plainObject', () => {
  const Class = function Class() {};

  expect(isPlainObject({})).toBe(true);
  expect(isPlainObject([])).toBe(false);
  expect(isPlainObject(new Class())).toBe(false);
  expect(isPlainObject(new Date())).toBe(false);
});
