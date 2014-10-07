goog.module('my.test');

var mod = goog.require('my.module');

describe('goog.module based tests', function() {
  it('should load modules', function() {
    expect(mod.greet()).toBe('hello world');
  });
});
