import isNaN from '.';

test('Is.isNaN', () => {
  expect(isNaN(NaN)).toBe(true);
  expect(isNaN(12)).toBe(false);
  expect(isNaN('qwe')).toBe(false);
  expect(isNaN([])).toBe(false);
  expect(isNaN({})).toBe(false);
});
