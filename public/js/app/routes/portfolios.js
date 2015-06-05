Plum.PortfoliosRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('portfolio');
  },
  setupController: function(controller, portfolios) {
    controller.set('content', portfolios);
  }
});