const CONFIG = {
  MAX_BUILD_TIME: 10 * 60 * 1000, // 10 minutes
  MAX_FILE_SIZE: 100 * 1024 * 1024, // 100MB
  SUPPORTED_PLATFORMS: ['vercel', 'netlify', 'heroku', 'railway', 'fly', 'docker'],
  DEFAULT_PORT: 3000,
  DEFAULT_TIMEOUT: 30000,
  CACHE_TTL: 60 * 60 * 1000, // 1 hour
};

module.exports = CONFIG;
