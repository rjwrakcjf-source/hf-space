function analyzeCode(code) {
  return {
    lines: code.split('\n').length,
    hasAsyncAwait: /async|await/.test(code),
    hasTypeScript: /:\s*\w+\s*[=;{]/.test(code),
    complexity: Math.floor(code.split(/if|for|while|switch/).length),
  };
}
module.exports = { analyzeCode };
