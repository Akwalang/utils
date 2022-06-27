import tplContent from '../content/index.js';

export default function tplParagraph(section) {
  let md = '';

  md += section.content.map(tplContent).join('\n');

  return md;
};
