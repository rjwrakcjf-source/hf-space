class ModelProfiler {
  async profile(modelId, sampleInput) {
    const start = performance.now();
    const elapsed = performance.now() - start;
    return {
      modelId,
      latency: elapsed,
      throughput: 1000 / elapsed,
      memoryUsage: process.memoryUsage(),
    };
  }
}

module.exports = { ModelProfiler };
