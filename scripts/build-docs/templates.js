const Hbs = require('handlebars');

const setter = require('../../dist/object/setter/index.js');
const resolve = require('../../dist/path/resolve/index.js');
const dirname = require('../../dist/path/dirname/index.js');
const readFile = require('../../dist/file/read/index.js');
const readDeepDir = require('../../dist/directory/readDeep/index.js');

const getTemplates = async () => {
  const root = resolve(__dirname, './templates');

  const list = (await readDeepDir(root)).filter(item => item.endsWith('.tpl.md'));

  const templates = [];

  for (let i = 0, len = list.length; i < len; i++) {
    const file = list[i];
    const content = await readFile(file);

    const name = file
      .replace(root, '')
      .replace('.tpl.md', '')
      .split('\\').join('.')
      .slice(1);

    const tpl = Hbs.compile(content);

    setter(templates, name, { file, name, tpl });
  }

  return templates;
};

module.exports = getTemplates;
