import chalk from 'chalk';

import resolve from '../../src/path/resolve/index.js';
import dirname from '../../src/path/dirname/index.js';
import readFile from '../../src/file/read/index.js';
import readDeepDir from '../../src/directory/readDeep/index.js';

const __dirname = dirname(import.meta);

const root = resolve(__dirname, '../../src');

let list = await readDeepDir(root);

list = list.filter(item => item.endsWith('.js'));

let errorFiles = 0;

for (let i = 0, len = list.length; i < len; i++) {
  const file = list[i].replace(root, '');
  const content = await readFile(list[i]);

  const errors = content
    .split('\n')
    .map((v, i) => ({ number: i + 1, line: v.trim() }))
    .filter(v => v.line.startsWith('import'))
    .map(v => ({ ...v, module: (/^import.+?from ('|")(\..*)\1;?.*?$/i.exec(v.line) || [])[2] }))
    .filter(v => !!v.module)
    // .filter(v => console.log(file, v) || v)
    .filter(v => !(v.module || '').endsWith('.js'));

  if (!errors.length) continue;

  errorFiles += 1;

  console.log(
`file: ${chalk.blue('\\src' + file)}
lines:
${errors.map(v => {
  let result = '  ' + chalk.yellow(v.number) + ': ';
  
  result += v.line
    .replace('import', chalk.cyan('import'))
    .replace('from', chalk.cyan('from'))
    .replace(v.module, chalk.red(v.module));
  
  return result;
}).join('\n')}
`
  );
}

console.log('Done! Files with error: ' + chalk[errorFiles ? 'red' : 'green'](errorFiles));
