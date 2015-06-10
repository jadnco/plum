Plum.ApplicationRoute = Ember.Route.extend({
  actions: {
    createNewPortfolio: function() {
      var self  = this,
          store = self.store,
          portfolio = self.controller.get('newPortfolio'),
          portfolioLength = Object.keys(portfolio).length,

          owner = self.controller.get('user'),

          message = 'Please set a value.';

      var counter = 0;

      // Loop through portfolio keys
      for (var key in portfolio) {
        var value = portfolio[key] || '';

        value = value.trim();

        // Values is set
        if (value.length > 0) {

          // All values are filled
          if (counter === (portfolioLength - 1)) {
            // Create new portfolio record
            var record = store.createRecord('portfolio', {
              name: name,
              owner: owner
            });

            // Save the portfolio record
            record.save().then(function(_portfolio) {
              self.transitionTo('portfolio', _portfolio.get('id'));
            });

            // Send close action to controller
            self.controller.send('closeNewPortfolioModal');

            break;
          }
        } else {
          console.log(key + ' is an empty string!');

          $('#new-portfolio-form').find('input[name="' + key + '"]').after(message);
        }

        counter++;
      }

      console.log('---------------------------');

      //console.log(portfolio);

      

      // Make sure a portfolio name is given
      /* if (name) {
        // Create new portfolio record
        var portfolio = store.createRecord('portfolio', {
          name: name,
          owner: owner
        });

        // Save the portfolio record
        portfolio.save().then(function(_portfolio) {
          self.transitionTo('portfolio', _portfolio.get('id'));
        });

        // Send close action to controller
        self.controller.send('closeNewPortfolioModal');
      } */
      

      //self.get('store').reload();

      //self.get('parentView').send('closeModal');
      
      //self.controller.get('portfolios').reload();
      //self.modelFor('portfolios').refresh();

      // TODO:
      // Refresh portfolios model
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