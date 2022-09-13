const resolve = require('../../dist/path/resolve/index.js');
const dirname = require('../../dist/path/dirname/index.js');
const readFile = require('../../dist/file/read/index.js');
const readDeepDir = require('../../dist/directory/readDeep/index.js');

const root = resolve(__dirname, '../../src');

module.exports = async function getDocFiles() {
  const list = (await readDeepDir(root)).filter(item => item.endsWith('.doc.js'));

  const docs = [];

  for (let i = 0, len = list.length; i < len; i++) {
    const file = list[i];
    const target = list[i].replace('.doc.js', '.md');
    const content = await readFile(file);

    const provider = eval(content.replace('export default', ''));

    docs.push({ file, target, provider });
  }

  return docs;
};
