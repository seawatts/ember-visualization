import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('addons', function() {
    this.route('addon', { path: ':id' });
  });
});
