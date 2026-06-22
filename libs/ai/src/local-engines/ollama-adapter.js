const { OllamaProvider } = require('../providers/ollama-provider');
class OllamaAdapter extends OllamaProvider {
  constructor(options = {}) { super(options.baseUrl); }
}
module.exports = { OllamaAdapter };
