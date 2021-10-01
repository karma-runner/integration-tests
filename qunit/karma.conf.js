module.exports = function(config) {
  config.set({
    frameworks: ['qunit'],

    files: [
      '*.js'
    ],

    browsers: ['FirefoxHeadless'],

    reporters: ['dots']
  });
};
