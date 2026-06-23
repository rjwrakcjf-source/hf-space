class ConsentManager {
  constructor() { this.consents = new Map(); }
  record(userId, action, granted) {
    this.consents.set(`${userId}:${action}`, { granted, recordedAt: new Date() });
  }
  hasConsent(userId, action) {
    return this.consents.get(`${userId}:${action}`)?.granted || false;
  }
}
module.exports = { ConsentManager };
