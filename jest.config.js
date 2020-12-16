module.exports = {
  clearMocks: true,
  testMatch: ['<rootDir>/tests/**/*.(spec|test).[jt]s?(x)'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
  coverageDirectory: '<rootDir>/tests/coverage',
};
