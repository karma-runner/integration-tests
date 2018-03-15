QUnit.test('should pass', function(assert) {
  assert.ok(true === true, 'Passed');
});

QUnit.test('should work', function(assert) {
  assert.ok(plus(1, 2) === 3, 'Passed');
});
