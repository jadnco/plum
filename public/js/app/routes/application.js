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
          newPortfolio = self.controller.get('newPortfolio'),
          portfolioLength = length(portfolio),

          owner = self.controller.get('user'),

          message = 'Please set both values.';

      if (checkFields($('#new-portfolio-form'), newPortfolio)) {
        if (isNaN(parseFloat(newPortfolio.cash))) {
          message = 'Cash needs to be a number';

          $('#new-portfolio-form').find('.form-error').text(message);
        } else {
          // Create new portfolio record
          var record = store.createRecord('portfolio', {
            name: newPortfolio.name,
            cash: parseFloat(newPortfolio.cash),
            owner: owner
          });

          // Save the portfolio record
          record.save().then(function(_portfolio) {
            self.transitionTo('portfolio', _portfolio.get('id'));
          });

          // Send close action to controller
          self.controller.send('closeNewPortfolioModal');
        }
      } else console.log('missing a field');
      

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