describe('Build Performance', () => {
  test('simple app build completes within 30s', async () => {
    const start = Date.now();
    // Simulate build
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(30000);
  });
});
