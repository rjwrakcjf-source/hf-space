module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js', '**/*.test.js', '**/*.spec.js'],
  collectCoverageFrom: [
    'libs/*/src/**/*.js',
    'apps/*/src/**/*.js',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  transform: {},
  moduleNameMapper: {
    '@hf-space/common': '<rootDir>/libs/common/src',
    '@hf-space/models': '<rootDir>/libs/models/src',
    '@hf-space/security': '<rootDir>/libs/security/src',
    '@hf-space/core': '<rootDir>/libs/core/src',
    '@hf-space/ai': '<rootDir>/libs/ai/src',
    '@hf-space/extensions': '<rootDir>/libs/extensions/src',
    '@hf-space/database': '<rootDir>/libs/database/src',
    '@hf-space/api': '<rootDir>/libs/api/src',
    '@hf-space/ui': '<rootDir>/libs/ui/src',
  },
};
