import tokenGenerator from './index.js';

test('Common.tokenGenerator: default letters', () => {
  const token = tokenGenerator(8);

  expect(token.length).toBe(8);
});

test('Common.tokenGenerator: custom letters', () => {
  const token = tokenGenerator(8, '0123456789');

  expect(token.length).toBe(8);
  expect(/^\d{8}$/.test(token)).toBe(true);
});
