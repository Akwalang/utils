import Hbs from 'handlebars';

import setter from '../../src/object/setter/index.js';
import resolve from '../../src/path/resolve/index.js';
import dirname from '../../src/path/dirname/index.js';
import readFile from '../../src/file/read/index.js';
import readDeepDir from '../../src/directory/readDeep/index.js';

const __dirname = dirname(import.meta);

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

export default getTemplates;
