import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // globalSetup: './vitestGlobalSetup', // path to a global setup file with function called before all tests (like db start)
    // ui: false, // enable vitest ui
    // open: false, // open vitest UI automatically if enabled
    // clearMocks: false, // call vi.clearAllMocks() before each test (will cause problems with async concurrent tests)
    // mockReset: false, // call vi.resetAllMocks() before each tests (same issue as above)
    // restoreMocks: false, // call vi.restoreAllMocks() before each tests (ditto above)
    // tags: [], // Defines tags and options for tests (https://vitest.dev/config/tags.html)
    // bail: 0, // Stop test execution when given number of tests have failed.
    // retry: {} // Set retry count, options, and conditions (https://vitest.dev/config/retry.html)
    // onConsoleLog(log, type) {return false} // Custom console.log handler, return false to suppress logs (https://vitest.dev/config/onconsolelog.html)
    // diff: { }, // customize diff display otpions (https://vitest.dev/config/diff.html)
    // projects: [], // define multiple project configurations within a single Vitest process. (https://vitest.dev/guide/projects.html)
    // reporters: ['default'], // Set test output formats (https://vitest.dev/guide/reporters.html)
    // coverage { enabled: false }, // Enable coverage reporting and options (include/exclude) (https://vitest.dev/guide/coverage.html)
    // printConsoleTrace: false, // Always print console traces (good for debugging)
    // disableConsoleIntercept: // Don't intercept and reformat console logs (but required for Vitest UI)
  },
});
