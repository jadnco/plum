Plum.PortfoliosRoute = Ember.Route.extend({
  model: function(params) {
    console.log(currentUser.username);
    return this.store.find('portfolios', params.username);
  },
  setupController: function(controller, portfolios) {
    console.log(portfolios);
    controller.set('model', portfolios);
  }
});