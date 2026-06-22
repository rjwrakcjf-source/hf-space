class SandboxManager {
  constructor() { this.sandboxes = new Map(); }

  async create(id, options = {}) {
    const sandbox = { id, options, createdAt: new Date(), status: 'running' };
    this.sandboxes.set(id, sandbox);
    return sandbox;
  }

  async destroy(id) {
    this.sandboxes.delete(id);
  }

  async execute(sandboxId, code, timeout = 5000) {
    if (!this.sandboxes.has(sandboxId)) throw new Error(`Sandbox ${sandboxId} not found`);
    return { success: true, result: null, elapsed: 0 };
  }

  list() { return Array.from(this.sandboxes.values()); }
}

module.exports = { SandboxManager };
