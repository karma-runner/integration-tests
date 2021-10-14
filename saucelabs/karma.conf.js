// When running pre-release tests we want tests to fail if SauceLabs is not
// configured instead of falling back to the headless browser. That's what
// KARMA_TEST_NO_FALLBACK variable controls.
const useSauceLabs = process.env.SAUCE_USERNAME && process.env.SAUCE_ACCESS_KEY
  || process.env.KARMA_TEST_NO_FALLBACK

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      '*.js'
    ],

    browsers: [useSauceLabs ? 'sl_chrome_linux' : 'FirefoxHeadless'],

    reporters: ['dots'],

    sauceLabs: {
      testName: 'Karma integration tests: saucelabs',
      startConnect: true
    },

    customLaunchers: {
      sl_chrome_linux: {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'linux'
      }
    }
  });
};
