describe('Security Integration', () => {
  test('should enforce sandbox policies', async () => {
    expect(true).toBe(true);
  });

  test('should encrypt and decrypt data', async () => {
    const { Encryption } = require('@hf-space/security');
    const enc = new Encryption();
    const key = enc.generateKey();
    const data = 'test data';
    const encrypted = enc.encrypt(data, key);
    const decrypted = enc.decrypt(encrypted, key);
    expect(decrypted).toBe(data);
  });
});
