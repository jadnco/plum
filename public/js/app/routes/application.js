/**
* public/js/app/routes/application.js
* -
* Main route; first access point
*/
Plum.ApplicationRoute = Ember.Route.extend({
  actions: {
    createNewPortfolio: function() {
      var self  = this,
          store = self.store,
          portfolio = self.controller.get('newPortfolio'),
          portfolioLength = Object.keys(portfolio).length,

          owner = self.controller.get('user'),

          message = 'Please set both values.';

      var counter = 0;

      // Loop through portfolio keys
      for (var key in portfolio) {
        var value = (portfolio[key] || '').trim();

        // Values is set
        if (value.length > 0) {

          // All values are filled
          if (counter === (portfolioLength - 1)) {
            if (isNaN(parseFloat(value))) {
              message = 'Cash needs to be a number';

              $('#new-portfolio-form').find('.form-error').text(message);

              break;
            } else {
              // Create new portfolio record
              var record = store.createRecord('portfolio', {
                name: portfolio.name,
                cash: parseFloat(portfolio.cash),
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
          }
        } else {
          $('#new-portfolio-form').find('.form-error').text(message);

          break;
        }

        counter++;
      }
      

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
      this.transitionTo('/not-found');
      console.log("An error: " + err.message);
    }
  },
  setupController: function(controller, model) {
    controller.set('user', this.store.find('user', USER));
    controller.set('portfolios', this.store.fetchAll('portfolio', {user: USER}));
  }
});