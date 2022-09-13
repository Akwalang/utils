import capitalize from '.';

test('String.capitalize', () => {
  const result = capitalize('some string');

  expect(result).toBe('Some string');
});
