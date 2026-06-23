class PermissionManager {
  constructor() { this.grants = new Map(); }

  grant(entityId, permissions) {
    const current = this.grants.get(entityId) || new Set();
    for (const p of permissions) current.add(p);
    this.grants.set(entityId, current);
  }

  revoke(entityId, permissions) {
    const current = this.grants.get(entityId);
    if (current) for (const p of permissions) current.delete(p);
  }

  has(entityId, permission) {
    return this.grants.get(entityId)?.has(permission) || false;
  }

  check(entityId, permission) {
    if (!this.has(entityId, permission)) {
      throw new Error(`Permission denied: ${entityId} needs ${permission}`);
    }
  }
}

module.exports = { PermissionManager };
