class ModelRegistry {
  constructor() {
    this.registry = new Map();
  }

  register(id, metadata) {
    this.registry.set(id, { ...metadata, registeredAt: new Date() });
  }

  get(id) { return this.registry.get(id) || null; }
  
  list() { return Array.from(this.registry.entries()).map(([id, meta]) => ({ id, ...meta })); }
  
  unregister(id) { return this.registry.delete(id); }
}

module.exports = { ModelRegistry };
