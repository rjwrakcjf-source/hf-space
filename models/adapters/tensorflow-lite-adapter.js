class TensorFlowLiteAdapter {
  constructor(options = {}) { this.options = options; }
  async load(modelPath) { return { loaded: true }; }
  async predict(input) { return { prediction: null }; }
}
module.exports = { TensorFlowLiteAdapter };
