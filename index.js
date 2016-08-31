/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-visualization',
  config(env, baseConfig) {
    let config = this._super(...arguments);

    if (baseConfig.APP) {
      // let dependencies = this.project.pkg.devDependencies;

      baseConfig.APP.addons = this.project.addons.map((addon) => {
        let name = addon.name;
        let version = addon.pkg.version;
        // let version = dependencies[name];
        if (isEmberCLIMiddleware(addon)) {
          return null;
        }

        return {
          name,
          version
        };
      });
    }

    return config;
  }
};
let emberCLIMiddleware = {
  'testem-url-rewriter': {},
  'tests-server-middleware': {},
  'history-support-middleware': {},
  'serve-files-middleware': {},
  'proxy-server-middleware': {}
};

function isEmberCLIMiddleware(addon) {
  return emberCLIMiddleware[addon.name] !== undefined;
}
