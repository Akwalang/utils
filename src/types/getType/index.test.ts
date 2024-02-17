import { getType } from '.';

test('Types.getType', async () => {
  expect(getType({})).toBe('Object');
  expect(getType([])).toBe('Array');
  expect(getType(null)).toBe('Null');
  expect(getType('qwerty')).toBe('String');
  expect(getType(123)).toBe('Number');
  expect(getType(undefined)).toBe('Undefined');
});
