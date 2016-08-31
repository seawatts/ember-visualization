import Ember from 'ember';
import config from '../config/environment';
// import initializerFactory from 'ember-visualization/initializers/ember-visualization';

const {
  String: { classify },
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
      // let appName = classify(addon);
      libraries.register(addon.name, addon.version);
    }
  }
};
