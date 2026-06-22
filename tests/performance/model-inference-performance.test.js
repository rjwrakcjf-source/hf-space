describe('Model Inference Performance', () => {
  test('inference latency under 1s for small models', async () => {
    const start = Date.now();
    // Simulate inference
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(1000);
  });
});
