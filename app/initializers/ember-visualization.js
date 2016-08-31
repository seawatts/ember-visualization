import Ember from 'ember';
import config from '../config/environment';
// import initializerFactory from 'ember-visualization/initializers/ember-visualization';

const {
  libraries
} = Ember;

const {
  APP: {
    addons
  }
} = config;

export default {
  initialize() {
    for (let addon of addons) {
      if (addon && addon.name) {
        libraries.register(addon.name, addon.version);
      }
    }
  }
};
