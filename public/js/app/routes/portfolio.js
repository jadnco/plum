Plum.PortfolioRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.fetchById('portfolio', params.slug);
  },
  setupController: function(controller, portfolio) {
    controller.set('model', portfolio);
    portfolio.get('transactions').reload();
    portfolio.reload();
  }
});