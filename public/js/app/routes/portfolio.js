Plum.PortfolioRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.fetchById('portfolio', params.slug);
  },
  setupController: function(controller, portfolio) {
    controller.set('model', portfolio);
    portfolio.reload();

    console.log(portfolio);
  },
  actions: {
    delete: function() {
      var self = this,
          model = self.controller.get('model'),
          confirmation = confirm('Delete \'' + model.get('name') + '\'?');
      
      // Make sure we have user confirmation
      if (confirmation) {
        // Find portfolio record and delete it
        self.store.find('portfolio', model.get('id')).then(function(portfolio) {
          portfolio.destroyRecord();

          self.transitionTo('portfolios');
        });
      }
    },
    depositCash: function() {
      var self  = this,
          model = self.controller.get('model'),
          newDeposit = self.controller.get('newDeposit');

      if (checkFields($('#new-deposit-form'), newDeposit)) {
        var oldCash = parseFloat(model.get('cash')),
            oldValue = parseFloat(model.get('value')),
            transaction = self.store.createRecord('transaction', {
              type: 'deposit',
              ticker: null,
              shares: null,
              price: null,
              value: parseFloat(newDeposit.cash)
            });

        model.get('transactions').pushObject(transaction);

        // Update cash property
        model.set('cash', (parseFloat(newDeposit.cash) + oldCash));

        // Update value property
        model.set('value', (parseFloat(newDeposit.cash) + oldValue));

        // Save record to the database
        model.save();

        console.log('portfolio saved');

        // Send close action to controller
        self.controller.send('closeNewDepositModal');
      }
    }
  }
});