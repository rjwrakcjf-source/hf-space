const DEFAULT_POLICY = {
  maxMemory: '256m',
  maxCpu: 0.5,
  allowedSyscalls: [],
  networkAccess: false,
  fileSystemAccess: 'none',
};

const TRUSTED_POLICY = {
  maxMemory: '1g',
  maxCpu: 1,
  allowedSyscalls: ['read', 'write', 'open', 'close'],
  networkAccess: true,
  fileSystemAccess: 'read-only',
};

module.exports = { DEFAULT_POLICY, TRUSTED_POLICY };
