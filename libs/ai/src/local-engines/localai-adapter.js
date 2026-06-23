const { LocalAIProvider } = require('../providers/localai-provider');
class LocalAIAdapter extends LocalAIProvider {
  constructor(options = {}) { super(options.baseUrl); }
}
module.exports = { LocalAIAdapter };
