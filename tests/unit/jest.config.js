module.exports = {
  clearMocks: true,
  testMatch: ['<rootDir>/**/*.(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.(js|jsx)?$': ['babel-jest'],
  },
};
