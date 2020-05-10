module.exports = {
  setupFilesAfterEnv: ['<rootDir>/.jest/toMatchString.ts'],
  moduleNameMapper: {
    '^.+\\.(css)$': '<rootDir>/.jest/mocks/css.ts'
  },
  collectCoverage: true
};
