export default function tplReturn(content) {
  let md = `**Return:**`

  md += '\n\n';

  md += `* ${content.result.type} `;

  if (content.result.defaultValue) {
    md += `_[default: ${content.result.defaultValue}]_ `;
  }

  md += `- ${content.result.description}`;

  return md;
};
