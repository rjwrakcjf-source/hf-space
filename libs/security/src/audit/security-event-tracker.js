const { AuditLogger } = require('./audit-logger');

class SecurityEventTracker {
  constructor() {
    this.logger = new AuditLogger();
    this.events = [];
  }

  track(eventType, details) {
    const event = { type: eventType, details, timestamp: new Date().toISOString() };
    this.events.push(event);
    this.logger.log(event);
    return event;
  }

  getRecentEvents(count = 100) {
    return this.events.slice(-count);
  }
}

module.exports = { SecurityEventTracker };
