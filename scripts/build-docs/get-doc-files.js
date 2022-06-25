import resolve from '../../src/path/resolve/index.js';
import dirname from '../../src/path/dirname/index.js';
import readFile from '../../src/file/read/index.js';
import readDeepDir from '../../src/directory/readDeep/index.js';

const __dirname = dirname(import.meta);

const root = resolve(__dirname, '../../src');

const list = (await readDeepDir(root)).filter(item => item.endsWith('.doc.js'));

const docs = [];

for (let i = 0, len = list.length; i < len; i++) {
  const file = list[i];
  const target = list[i].replace('.doc.js', '.md');
  const content = await readFile(file);

  const provider = eval(content.replace('export default', ''));

  docs.push({ file, target, provider });
}

export default docs;
