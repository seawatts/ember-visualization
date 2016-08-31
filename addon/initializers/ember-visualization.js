import Ember from 'ember';

const {
  String: { classify },
  libraries
} = Ember;

export function initialize(addons) {
  // let registered = false;
  // for (let addon of addons) {
  //
  //   if (!registered && addon) {
  //     var appName = classify(addon);
  //     libraries.register(appName, 'v1.0.0');
  //     registered = true;
  //   }
  // }
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'ember-visualization',
  initialize
};
