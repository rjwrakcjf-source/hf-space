const crypto = require('crypto');

class KeyManager {
  constructor() { this.keys = new Map(); }
  generate(id) {
    const key = crypto.randomBytes(32).toString('hex');
    this.keys.set(id, key);
    return key;
  }
  get(id) { return this.keys.get(id) || null; }
  rotate(id) { return this.generate(id); }
  delete(id) { return this.keys.delete(id); }
}

module.exports = { KeyManager };
