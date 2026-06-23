const express = require('express');
const { InferenceEngine } = require('./inference-engine');

class InferenceServer {
  constructor(engine) {
    this.engine = engine || new InferenceEngine();
    this.app = express();
    this.app.use(express.json());
    this.setupRoutes();
  }

  setupRoutes() {
    this.app.post('/infer', async (req, res) => {
      try {
        const { modelId, input } = req.body;
        const result = await this.engine.infer(modelId, input);
        res.json(result);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
  }

  listen(port = 8080) {
    return this.app.listen(port);
  }
}

module.exports = { InferenceServer };
