const esmModules = ['uuid'];

module.exports = {
    rootDir: '../../../',
    // jest.config.js
    setupFiles: ['config/config'],
    setupFilesAfterEnv: ['./src/config/jest/jest.setup.js'],
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': '@swc/jest',
        '^.+\\.svg$': '<rootDir>/svgTransform.js'
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/identity-obj-proxy',
        '^@components(.*)$': '<rootDir>/components$1',
        '^@pages(.*)$': '<rootDir>/pages$1',
        '^@hooks(.*)$': '<rootDir>/context/hooks$1',
        '^@/(.*)$': '<rootDir>/src/$1' // Maps '@/...' to 'src/...'
    },
    verbose: true,
    collectCoverage: true,
    coveragePathIgnorePatterns: ['<rootDir>/test/test-utils.js'],
    testPathIgnorePatterns: ['<rootDir>/e2e/', '<rootDir>/src/e2e/'],
    // ignore cypress
    modulePathIgnorePatterns: ['./cypress'],
    transformIgnorePatterns: [`node_modules/(?!(?:.pnpm/)?(${esmModules.join('|')}))`],
    testEnvironment: 'jsdom'
};
