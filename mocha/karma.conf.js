module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],

    files: [
      '*.js'
    ],

    browsers: ['FirefoxHeadless'],

    reporters: ['dots']
  });
};
