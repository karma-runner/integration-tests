module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    preprocessors: {'**/*.js': ['googmodule']},
    files: [
      'base.js',
      '*.sample.js',
      '*.spec.js'
    ],
    plugins: ['karma-jasmine', 'karma-firefox-launcher', 'karma-googmodule-preprocessor'],
    browsers: ['Firefox'],
  });
};
