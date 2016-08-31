import Ember from 'ember';

const {
  Route,
  libraries
} = Ember;

export default Route.extend({
  model() {
    return libraries._registry;
  }
});
