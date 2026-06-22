class DyadAdapter {
  constructor(options = {}) { this.options = options; }
  async complete(prompt, options = {}) { return ''; }
}
module.exports = { DyadAdapter };
