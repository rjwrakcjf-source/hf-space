const fs = require('fs-extra');
const path = require('path');

class AuditLogger {
  constructor(logDir = './security/audit-logs') {
    this.logDir = logDir;
  }

  async log(event) {
    const entry = {
      timestamp: new Date().toISOString(),
      ...event,
    };
    await fs.ensureDir(this.logDir);
    const logFile = path.join(this.logDir, `${new Date().toISOString().split('T')[0]}.jsonl`);
    await fs.appendFile(logFile, JSON.stringify(entry) + '\n');
    return entry;
  }
}

module.exports = { AuditLogger };
