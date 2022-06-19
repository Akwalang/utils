import filename from './index.js';

test('Path.filename', () => {
  const url = 'file:///' + __filename.split('\\').join('/');
  const file = filename({ url });

  expect(file).toBe('index.test.js');
});
