module.exports = (config) ->
  config.set
    frameworks: ['jasmine']

    files: [
      '*.coffee'
    ]

    browsers: ['Firefox']

    coffeePreprocessor:
      options:
        sourceMap: true

    preprocessors:
      'plus.coffee': 'coverage'
      'test.coffee': 'coffee'

    coverageReporter:
      instrumenters:
        ibrik : require('ibrik')
      instrumenter:
        '**/*.coffee': 'ibrik'

    reporters: ['dots', 'coverage']
