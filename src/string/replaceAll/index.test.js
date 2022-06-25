import replaceAll from './index.js';

test('String.replaceAll', () => {
  const result = replaceAll('1 test 2 test 3 test', 'test', 'replacer');

  expect(result).toBe('1 replacer 2 replacer 3 replacer');
});
