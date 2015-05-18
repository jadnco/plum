Plum.ApplicationRoute = Ember.Route.extend({
  actions: {
    search: function(term) {
      var self = this;

      if (term.length > 0) {
        self.controller.store.find('stock', {query: term}).then(function(results) {
          self.controller.set('stocks', results);
        });
      }
    },
    loading: function() {
      return true;
    },
    error: function(err) {
      /*Plum.Logger.error(err);
      this.transitionTo('/not-found');*/
      console.log("An error: " + err.message);
    }
  },
  setupController: function(controller, model) {
    controller.set('user', this.store.find('user', USER));
    controller.set('portfolios', this.store.find('portfolio', {user: USER}));
  }
});