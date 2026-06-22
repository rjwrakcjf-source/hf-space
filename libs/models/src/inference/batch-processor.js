class BatchProcessor {
  constructor(batchSize = 16) {
    this.batchSize = batchSize;
    this.queue = [];
  }

  async process(items, processFn) {
    const results = [];
    for (let i = 0; i < items.length; i += this.batchSize) {
      const batch = items.slice(i, i + this.batchSize);
      const batchResults = await Promise.all(batch.map(processFn));
      results.push(...batchResults);
    }
    return results;
  }
}

module.exports = { BatchProcessor };
