/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-visualization',
  config(env, baseConfig) {
    let config = this._super(...arguments);

    if (baseConfig.APP) {
      let dependencies = this.project.pkg.devDependencies;

      baseConfig.APP.addons = this.project.addons.map((addon) => {
        let name = addon.name;
        let version = dependencies[name];
        return {
          name,
          version
        };
      });
    }

    return config;
  }
};
