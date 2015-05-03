Plum.PortfoliosRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('portfolios', currentUser.username);
  },
  setupController: function(controller, portfolios) {
    controller.set('model', portfolios);
  }
});