import { random } from '.';

test('String.random: default letters', () => {
  const token = random(8);

  expect(token.length).toBe(8);
});

test('String.random: custom letters', () => {
  const token = random(8, '0123456789');

  expect(token.length).toBe(8);
  expect(/^\d{8}$/.test(token)).toBe(true);
});
