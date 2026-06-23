const { ModelLoader } = require('@hf-space/models');

describe('ModelLoader', () => {
  test('should initialize with cache directory', () => {
    const loader = new ModelLoader('./tmp/test-cache');
    expect(loader.cacheDir).toBe('./tmp/test-cache');
  });

  test('should return empty list when no models loaded', () => {
    const loader = new ModelLoader('./tmp/test-cache');
    expect(loader.listLoaded()).toEqual([]);
  });

  test('should unload a model', () => {
    const loader = new ModelLoader('./tmp/test-cache');
    loader.loaded.set('test-model', { id: 'test-model' });
    expect(loader.unload('test-model')).toBe(true);
    expect(loader.listLoaded()).not.toContain('test-model');
  });
});
