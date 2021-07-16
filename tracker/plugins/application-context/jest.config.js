module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  reporters: ['jest-standard-reporter'],
  collectCoverageFrom: ['src/**.ts'],
  setupFiles: ['jest-useragent-mock'],
  moduleNameMapper: {
    '@objectiv/schema': '<rootDir>../../core/schema/src',
    '@objectiv/tracker-core': '<rootDir>../../core/tracker/src',
    '@objectiv/plugin-(.*)': '<rootDir>../../plugins/$1/src',
  },
};