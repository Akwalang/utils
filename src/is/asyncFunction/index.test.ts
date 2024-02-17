import { isAsyncFunction } from '.';

test('Is.isAsyncFunction', () => {
  expect(isAsyncFunction(async function () {})).toBe(true);
  expect(isAsyncFunction(async () => {})).toBe(true);

  expect(isAsyncFunction(function () {})).toBe(false);
  expect(isAsyncFunction(() => {})).toBe(false);

  expect(isAsyncFunction(function* () {})).toBe(false);
});
