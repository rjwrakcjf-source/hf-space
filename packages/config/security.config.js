module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'dev-secret-change-in-production',
  jwtExpiresIn: '7d',
  bcryptRounds: 12,
  sandbox: {
    defaultMemory: '256m',
    defaultCpu: 0.5,
    timeout: 30000,
  },
  vault: {
    enabled: process.env.VAULT_ENABLED === 'true',
    addr: process.env.VAULT_ADDR || 'http://localhost:8200',
  },
};
