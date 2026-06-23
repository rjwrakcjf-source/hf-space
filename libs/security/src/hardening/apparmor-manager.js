class AppArmorManager {
  generateProfile(name, rules = []) {
    return `profile ${name} { ${rules.join(' ')} }`;
  }
  loadProfile(profile) { return { loaded: true }; }
}
module.exports = { AppArmorManager };
