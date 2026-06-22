class NetworkPolicyManager {
  allow(source, destination, port) { return { rule: 'allow', source, destination, port }; }
  deny(source, destination) { return { rule: 'deny', source, destination }; }
  getDefaultPolicy() { return { default: 'deny', rules: [] }; }
}
module.exports = { NetworkPolicyManager };
