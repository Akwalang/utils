import isDate from '.';

test('Is.date', () => {
  class Class {}

  expect(isDate(new Date())).toBe(true);
  expect(isDate([])).toBe(false);
  expect(isDate({})).toBe(false);
  expect(isDate(new Class())).toBe(false);
});
