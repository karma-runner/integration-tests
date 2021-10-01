module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      '*.js'
    ],

    browsers: ['FirefoxHeadless'],

    reporters: ['dots', 'junit'],

    junitReporter: {
      outputFile: 'test-results.xml'
    }
  });
};
