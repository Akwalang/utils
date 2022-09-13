const tplContent = require('../content/index.js');

module.exports = function tplParagraph(section) {
  let md = '';

  md += section.content.map(tplContent).join('\n');

  return md;
};
