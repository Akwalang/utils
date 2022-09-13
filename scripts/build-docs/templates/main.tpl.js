const tplSection = require('./sections/index.js');

module.exports = function main(data) {
  let md = `## ${data.title}\n\n`;

  md += data.sections.map(section => tplSection(section, data.sections)).join('\n\n');

  return md;
};
