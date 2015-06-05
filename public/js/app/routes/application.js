Plum.ApplicationRoute = Ember.Route.extend({
  actions: {
    createNewPortfolio: function() {
      var self  = this;
      var store = this.store;

      console.log("PORTFOLIO STORE -->");

      var user = this.controller.get('user');
      console.log(user.get('id'));

      var portfolio = store.createRecord('portfolio', {
        name: self.controller.get('newPortfolioName'),
        owner: user
      });

      portfolio.save().then(function(_portfolio) {
        self.transitionTo('portfolio', _portfolio.get('id'));
      });

      //self.get('store').reload();

      //self.get('parentView').send('closeModal');
      
      //self.modelFor('portfolios').reload();
      //self.modelFor('portfolios').refresh();

      // TODO:
      // Refresh portfolios model
      // --> Clear form data
    },
    search: function(term) {
      var self = this;

      if (term.length > 0) {
        self.controller.store.find('stock', {query: term}).then(function(results) {
          self.controller.set('stocks', results);
        });
      }
    },
    error: function(err) {
      /*Plum.Logger.error(err);*/
      this.transitionTo('/not-found');
      console.log("An error: " + err.message);
    }
  },
  setupController: function(controller, model) {
    controller.set('user', this.store.find('user', USER));
    controller.set('portfolios', this.store.fetchAll('portfolio', {user: USER}));
  }
});