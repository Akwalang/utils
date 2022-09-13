const main = require('./templates/main.tpl.js');

const pkg = require('../package.js');
const meta = require('../meta.js');
const types = require('./types.js');

const build = async (provider) => {
  const data = provider(pkg, meta, types);

  return main(data);
};

module.exports = build;
