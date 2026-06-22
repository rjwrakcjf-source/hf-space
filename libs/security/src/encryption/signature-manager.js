const crypto = require('crypto');

class SignatureManager {
  sign(data, privateKey) {
    const sign = crypto.createSign('SHA256');
    sign.update(data);
    return sign.sign(privateKey, 'base64');
  }

  verify(data, signature, publicKey) {
    const verify = crypto.createVerify('SHA256');
    verify.update(data);
    return verify.verify(publicKey, signature, 'base64');
  }
}

module.exports = { SignatureManager };
