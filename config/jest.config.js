module.exports = {
  rootDir: "../",
  verbose: true,
  moduleDirectories: ["node_modules"],
  setupFilesAfterEnv: ["<rootDir>/config/jest.setup.js"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/src/store/",
    "<rootDir>/src/hooks/",
    "<rootDir>/src/utils/",
  ],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  coverageThreshold: {
    "./src/components/": {
      branches: 75,
      statements: 75,
    },
  },
  testMatch: ["<rootDir>/src/**/*.test.js"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  coveragePathIgnorePatterns: ["/node_modules/", "/src/store/"],
  coverageReporters: ["lcov", "json", "text-summary"],
  transform: {
    "\\.(js|jsx)?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/src/styleMock.js",
  },
};
