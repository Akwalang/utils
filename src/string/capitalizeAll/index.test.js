import capitalizeAll from './index.js';

test('String.capitalizeAll', () => {
  const result = capitalizeAll('qwe, asd. zxc 8rty');

  expect(result).toBe('Qwe, Asd. Zxc 8rty');
});
