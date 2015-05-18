Plum.PortfoliosRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('portfolio', {user: USER});
  },
  setupController: function(controller, portfolios) {
    controller.set('content', portfolios);
  }
});