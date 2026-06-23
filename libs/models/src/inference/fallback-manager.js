class FallbackManager {
  constructor(models = []) {
    this.models = models;
  }

  async infer(input) {
    for (const model of this.models) {
      try {
        return await model.infer(input);
      } catch {
        continue;
      }
    }
    throw new Error('All models failed');
  }
}

module.exports = { FallbackManager };
