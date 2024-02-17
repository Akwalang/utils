import { isEmpty } from '.';

test('Is.empty', () => {
  expect(isEmpty('')).toBe(true);
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);

  expect(isEmpty([])).toBe(true);
  expect(isEmpty({})).toBe(true);

  expect(isEmpty(0)).toBe(false);
  expect(isEmpty(false)).toBe(false);

  expect(isEmpty([null, undefined])).toBe(false);
  expect(isEmpty({ a: null, b: undefined })).toBe(false);

  expect(isEmpty([null, undefined], false)).toBe(true);
  expect(isEmpty({ a: null, b: undefined }, false)).toBe(true);

  expect(isEmpty({ a: null, b: [[], [], [null, undefined]] }, false)).toBe(true);
});
