var TRAVIS_WITH_SAUCE = !!process.env.SAUCE_ACCESS_KEY;

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      '*.js'
    ],

    browsers: [TRAVIS_WITH_SAUCE ? 'sl_chrome_linux' : 'Firefox'],

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
