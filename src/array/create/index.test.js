import create from './index.js';

test('Array.create: count', () => {
  const result = create(5);

  expect(result).toEqual([0, 1, 2, 3, 4]);
});

test('Array.create: from positive - to positive up', () => {
  const result = create(5, 10);

  expect(result).toEqual([5, 6, 7, 8, 9, 10]);
});

test('Array.create: from positive - to positive down', () => {
  const result = create(7, 2);

  expect(result).toEqual([7, 6, 5, 4, 3, 2]);
});

test('Array.create: from negative - to negative up', () => {
  const result = create(-7, -2);

  expect(result).toEqual([-7, -6, -5, -4, -3, -2]);
});

test('Array.create: from negative - to negative down', () => {
  const result = create(-5, -10);

  expect(result).toEqual([-5, -6, -7, -8, -9, -10]);
});

test('Array.create: from negative - to positive up', () => {
  const result = create(-5, 2);

  expect(result).toEqual([-5, -4, -3, -2, -1, 0, 1, 2]);
});

test('Array.create: from positive - to negative down', () => {
  const result = create(5, -2);

  expect(result).toEqual([5, 4, 3, 2, 1, 0, -1, -2]);
});

test('Array.create: from positive - to negative down with step', () => {
  const result = create(5, -2, 2);

  expect(result).toEqual([5, 3, 1, -1]);
});

test('Array.create: from negative - to positive down with step', () => {
  const result = create(-5, 12, 4);

  expect(result).toEqual([-5, -1, 3, 7, 11]);
});

test('Array.create: count and callback', () => {
  const result = create(5, i => 'test-' + i);

  expect(result).toEqual(['test-0', 'test-1', 'test-2', 'test-3', 'test-4']);
});

test('Array.create: count and async callback', async () => {
  const result = await create(5, async i => {
    await new Promise(resolve => setTimeout(resolve, Math.random() * i));

    return 'test-' + i * 2;
  });

  expect(result).toEqual(['test-0', 'test-2', 'test-4', 'test-6', 'test-8']);
});
