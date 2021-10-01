module.exports = (config) ->
  config.set
    frameworks: ['jasmine']

    files: [
      '*.coffee'
    ]

    browsers: ['FirefoxHeadless']

    coffeePreprocessor:
      options:
        sourceMap: true

    preprocessors:
      '**/*.coffee': 'coffee'

    reporters: ['dots']
