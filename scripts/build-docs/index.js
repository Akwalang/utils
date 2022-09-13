const chalk = require('chalk');

const getDocs = require('./get-doc-files.js');
const build = require('./build.js');
const write = require('./write.js');

const stats = {
  created: 0,
  updated: 0,
  skipped: 0,
};

(async () => {
  console.log(' ');

  const docs = await getDocs();

  for (let i = 0, len = docs.length; i < len; i++) {
    const { target, provider } = docs[i];

    const content = await build(provider);

    const type = await write(target, content);

    stats[type] += 1;
  }

  console.log('\nDone!\n');

  console.log(`Files created: ${chalk.green(stats.created)}`);
  console.log(`Files updated: ${chalk.cyan(stats.updated)}`);
  console.log(`Files skipped: ${chalk.yellow(stats.skipped)}`);
})();
