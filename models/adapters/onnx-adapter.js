class ONNXAdapter {
  constructor(options = {}) { this.options = options; }
  async load(modelPath) { return { loaded: true, path: modelPath }; }
  async run(input) { return { output: null }; }
}
module.exports = { ONNXAdapter };
