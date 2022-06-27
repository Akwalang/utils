import tplSection from './sections/index.js';

export default function main(data) {
  let md = `## ${data.title}\n\n`;

  md += data.sections.map(section => tplSection(section, data.sections)).join('\n\n');

  return md;
};
