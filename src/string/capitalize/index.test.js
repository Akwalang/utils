import capitalize from './index.js';

test('String.capitalize', () => {
  const result = capitalize('some string');

  expect(result).toBe('Some string');
});
