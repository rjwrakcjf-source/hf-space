const { ModelRouter } = require('@hf-space/models');

describe('ModelRouter', () => {
  test('should select first model', () => {
    const models = [{ id: 'gpt2' }, { id: 'distilgpt2' }];
    const router = new ModelRouter(models);
    const selected = router.selectModel('text-generation');
    expect(selected).toEqual({ id: 'gpt2' });
  });

  test('should return null for empty models', () => {
    const router = new ModelRouter([]);
    expect(router.selectModel('text-generation')).toBeNull();
  });
});
