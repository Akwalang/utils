const tplContent = require('../content/index.js');

module.exports = function tplDescription(section) {
  let md = '```javascript\n' + section.title + '\n```\n\n';

  md += section.content.map(tplContent).join('\n');

  return md;
};
