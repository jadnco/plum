Plum.UserRoute = Ember.Route.extend({
  model: function(params) {
    // Get model data for `currentUser`
    return this.store.find('user', USER);
  },
  setupController: function(controller, user) {
    controller.set('model', user);
  }
});