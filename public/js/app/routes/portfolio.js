Plum.PortfolioRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('portfolio', params.slug);
  },
  setupController: function(controller, portfolio) {
    controller.set('model', portfolio);
  }
});