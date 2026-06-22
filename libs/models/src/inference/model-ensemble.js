class ModelEnsemble {
  constructor(models = []) {
    this.models = models;
  }

  async infer(input, strategy = 'voting') {
    const outputs = await Promise.all(this.models.map(m => m.infer(input)));
    return { outputs, ensemble: outputs[0] };
  }
}

module.exports = { ModelEnsemble };
