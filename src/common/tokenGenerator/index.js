const LETTERS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function tokenGenerator(length, letters = LETTERS) {
  let result = '';

  while (length--) {
    result += letters[~~(Math.random() * letters.length)];
  }

  return result;
};
