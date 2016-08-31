import Ember from 'ember';
import FooInitializer from 'dummy/initializers/foo';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | foo', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  FooInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
