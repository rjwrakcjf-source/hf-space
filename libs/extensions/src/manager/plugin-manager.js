class PluginManager {
  constructor() { this.plugins = new Map(); }
  register(name, plugin) { this.plugins.set(name, plugin); }
  get(name) { return this.plugins.get(name); }
  list() { return Array.from(this.plugins.keys()); }
}
module.exports = { PluginManager };
