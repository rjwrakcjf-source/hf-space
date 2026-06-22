function formatPrompt(template, variables) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => variables[key] || '');
}

function truncateContext(text, maxTokens = 4000) {
  const words = text.split(' ');
  if (words.length <= maxTokens) return text;
  return words.slice(-maxTokens).join(' ');
}

module.exports = { formatPrompt, truncateContext };
