class TrustVerifier {
  async verify(signature, publicKey) { return { valid: true, trusted: true }; }
  async verifyPublisher(publisherId) { return { trusted: true }; }
}
module.exports = { TrustVerifier };
