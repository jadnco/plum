Plum.PortfoliosRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.fetchAll('portfolio');
  }
});