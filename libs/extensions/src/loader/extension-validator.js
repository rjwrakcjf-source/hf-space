const semver = require('semver');

class ExtensionValidator {
  async validate(manifest) {
    const required = ['id', 'name', 'version', 'main'];
    for (const field of required) {
      if (!manifest[field]) throw new Error(`Extension manifest missing required field: ${field}`);
    }
    if (!semver.valid(manifest.version)) {
      throw new Error(`Invalid version: ${manifest.version}`);
    }
    return { valid: true };
  }
}

module.exports = { ExtensionValidator };
