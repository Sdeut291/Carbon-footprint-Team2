// jest.config.js
module.exports = {
  preset: 'jest-preset-angular',
  verbose: false,
  collectCoverage: false,
  randomize: true,
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  coverageReporters: ['lcov', 'text', 'json-summary'],
  modulePathIgnorePatterns: ['<rootDir>/playwright'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
