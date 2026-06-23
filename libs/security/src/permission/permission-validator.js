const VALID_PERMISSIONS = ['storage', 'network', 'filesystem', 'ipc', 'notifications', 'camera', 'microphone'];

function validatePermissions(permissions) {
  const invalid = permissions.filter(p => !VALID_PERMISSIONS.includes(p));
  if (invalid.length > 0) throw new Error(`Invalid permissions: ${invalid.join(', ')}`);
  return { valid: true };
}

module.exports = { validatePermissions, VALID_PERMISSIONS };
