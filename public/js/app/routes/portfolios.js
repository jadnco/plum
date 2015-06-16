Plum.PortfoliosRoute = Ember.Route.extend({
  model: function(params) {
    console.log('Getting Records...');
    return this.store.fetchAll('portfolio');
  }
});