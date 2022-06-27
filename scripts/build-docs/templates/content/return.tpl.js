export default function tplReturn(content) {
  let md = `**Return:**\n\n${content.result.type} `;

  if (content.result.defaultValue) {
    md += `_[default: ${content.result.defaultValue}]_ `;
  }

  md += `- ${content.result.description}`;

  return md;
};
