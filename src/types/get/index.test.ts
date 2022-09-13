import get from '.';

test('Types.get', async () => {
  expect(get({})).toBe('Object');
  expect(get([])).toBe('Array');
  expect(get(null)).toBe('Null');
  expect(get('qwerty')).toBe('String');
  expect(get(123)).toBe('Number');
  expect(get(undefined)).toBe('Undefined');
});
