import first from './mock/1_first.js';

test('Process.getStack', () => {
  const result = first().map(item => {
    return { file: item.file.replace(/^.*\/src/i, '/src') };
  });

  expect(result).toEqual([
    { file: '/src/process/getStack/mock/4_fourth.js' },
    { file: '/src/process/getStack/mock/3_third.js' },
    { file: '/src/process/getStack/mock/2_second.js' },
    { file: '/src/process/getStack/mock/1_first.js' },
  ]);
});
