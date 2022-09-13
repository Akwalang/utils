import isPlainObject from '.';

test('Is.plainObject', () => {
  class Class {}

  expect(isPlainObject({})).toBe(true);
  expect(isPlainObject([])).toBe(false);
  expect(isPlainObject(new Class())).toBe(false);
  expect(isPlainObject(new Date())).toBe(false);
});
