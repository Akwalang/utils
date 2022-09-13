import capitalizeAll from '.';

test('String.capitalizeAll', () => {
  const result = capitalizeAll('qwe, asd. zxc 8rty');

  expect(result).toBe('Qwe, Asd. Zxc 8rty');
});
