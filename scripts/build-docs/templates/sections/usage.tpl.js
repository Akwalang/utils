const types = require('../../types.js');

module.exports = function tplUsage(section, sections) {
  const usages = sections.filter(item => item.type === types.SECTION_USAGE);

  let md = ``;

  md += `### Usage`;

  if (usages.length > 1) {
    md += ' #' + (usages.indexOf(section) + 1);
  }

  return md;
};
