function formatPrompt(template, variables) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => variables[key] || '');
}

function truncateContext(text, maxWords = 4000) {
  const words = text.split(' ');
  if (words.length <= maxWords) return text;
  return words.slice(-maxWords).join(' ');
}

module.exports = { formatPrompt, truncateContext };
