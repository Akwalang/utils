const LETTERS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function random(length: number, letters: string = LETTERS): string {
  let result = '';

  while (length--) {
    result += letters[~~(Math.random() * letters.length)];
  }

  return result;
};
