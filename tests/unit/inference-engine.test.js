const { InferenceEngine } = require('@hf-space/models');

describe('InferenceEngine', () => {
  let engine;

  beforeEach(() => {
    engine = new InferenceEngine({ workers: 1 });
  });

  test('should throw when model not loaded', async () => {
    await expect(engine.infer('unknown-model', 'test'))
      .rejects.toThrow('Model unknown-model not loaded');
  });

  test('should load a model', async () => {
    await engine.loadModel('test-model', '/tmp/test-model');
    expect(engine.models.has('test-model')).toBe(true);
  });
});
