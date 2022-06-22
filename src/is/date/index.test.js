import isDate from './index.js';

test('Is.date', () => {
  const Class = function Class() {};

  expect(isDate(new Date())).toBe(true);
  expect(isDate([])).toBe(false);
  expect(isDate({})).toBe(false);
  expect(isDate(new Class())).toBe(false);
});
