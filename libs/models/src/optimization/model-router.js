class ModelRouter {
  constructor(models = []) {
    this.models = models;
  }

  selectModel(task, constraints = {}) {
    return this.models[0] || null;
  }
}
module.exports = { ModelRouter };
