const chalk = require('chalk');
const prompt = require('prompt');

const readDir = require('../../dist/directory/read/index.js').read;
const isExistsDir = require('../../dist/directory/isExists/index.js').isExists;

const readFile = require('../../dist/file/read/index.js').read;
const writeFile = require('../../dist/file/write/index.js').write;

const args = require('../../dist/process/args/index.js').args;
const resolve = require('../../dist/path/resolve/index.js').resolve;
const template = require('../../dist/string/template/index.js').template;
const capitalize = require('../../dist/string/capitalize/index.js').capitalize;

(async () => {
  const files = await readDir(__dirname, 'templates');

  const tpls = [];

  for (let i = 0, len = files.length; i < len; i++) {
    const template = await readFile([__dirname, 'templates', files[i]]);

    tpls.push({ name: files[i], template });
  }

  let module = args().name;

  if (!module) {
    const schema = {
      properties: {
        name: {
          description: 'Module name',
          pattern: /^\s*[a-z\d]+\.[a-z\d]+\s*$/i,
          message: 'Invalid module name. Module and Method names should be written in format "module.method"',
          required: true
        },
      }
    };

    module = await new Promise((resolve) => {
      prompt.start();

      prompt.get(schema, function (err, result) {
        if (err) {
          console.log('Incorrect module name: ' + chalk.red(result.name));
          process.exit(2);
        }

        resolve(result.name);
      });
    });
  }

  const [name, method] = module.split('.');

  if (!name || !method) {
    throw new Error('Module and Method names should be written in format "module.method"');
  }

  const rootDir = resolve(__dirname, '../../src/', name, method);

  const exists = await isExistsDir(rootDir);

  if (exists) {
    throw new Error('Method already exists in Module');
  }

  const stack = tpls.map(tpl => {
    const fileName = resolve(rootDir, tpl.name.slice(0, -4));
    const content = template(tpl.template, { module: { name: capitalize(name), method } });

    return writeFile(fileName, content);
  });

  await Promise.all(stack);

  console.log('Done!');
})();
