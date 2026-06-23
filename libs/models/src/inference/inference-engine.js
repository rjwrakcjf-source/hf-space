const { WorkerPool } = require('./worker-pool');

class InferenceEngine {
  constructor(options = {}) {
    this.pool = new WorkerPool(options.workers || 2);
    this.models = new Map();
  }

  async loadModel(modelId, modelPath) {
    this.models.set(modelId, { id: modelId, path: modelPath });
  }

  async infer(modelId, input, options = {}) {
    const model = this.models.get(modelId);
    if (!model) throw new Error(`Model ${modelId} not loaded`);
    return { modelId, input, output: null, latency: 0 };
  }

  async inferBatch(modelId, inputs) {
    return Promise.all(inputs.map(input => this.infer(modelId, input)));
  }
}

module.exports = { InferenceEngine };
