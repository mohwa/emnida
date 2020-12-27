module.exports = {
  clearMocks: true,
  testMatch: ['<rootDir>/tests/**/*.(spec|test).[jt]s?(x)'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js'],
  // jest.config.js 파일에서 아래처럼 babel config file 을 명확히 할당해도, {root}/.babelrc 파일을 선처리하기때문에, 별도로 만든 jest 용 babel 파일을 제대로 사용할 수 없다.
  transform: {
    '^.+\\.(js|jsx)?$': ['babel-jest', { configFile: './babel/.babelrc-test' }],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
