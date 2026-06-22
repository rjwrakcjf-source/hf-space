const { ComplexityDetector } = require('./complexity-detector');
const { ProgressiveBuilder } = require('./progressive-builder');

class HybridBuilder {
  constructor(options = {}) {
    this.detector = new ComplexityDetector();
    this.builder = new ProgressiveBuilder(options);
  }

  async build(appDescription, options = {}) {
    const complexity = await this.detector.analyze(appDescription);
    const strategy = complexity.score > 0.7 ? 'iterative' : 'direct';
    return await this.builder.build(appDescription, { ...options, strategy, complexity });
  }
}

module.exports = { HybridBuilder };
