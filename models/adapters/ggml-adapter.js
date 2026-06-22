class GGMLAdapter {
  constructor(options = {}) { this.options = options; }
  async load(modelPath) { return { loaded: true }; }
  async generate(prompt, options = {}) { return { text: '' }; }
}
module.exports = { GGMLAdapter };
