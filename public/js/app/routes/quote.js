Plum.QuoteRoute = Ember.Route.extend({
  model: function(params) {
    var url = 'yql?q=';

    var query = 'select * from yahoo.finance.quotes where symbol in ("';
    query += params.ticker + '")';

    url += encodeURIComponent(query);
    url += '&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=';
    
    return this.store.find('quote', url);
  },
  setupController: function(controller, quote) {
    controller.set('model', quote);
  },
  actions: {
    addToPortfolio: function() {
      var self  = this,
          store = self.store,
          newTrade = self.controller.get('newTrade'),

          message = 'Please fill all fields.';

      // Set trade value; round to two decimals
      newTrade.value = Math.round((newTrade.shares * newTrade.price) * 100) / 100;

      var newTradeLength = Object.keys(newTrade).length;

      var counter = 0;

      console.log(newTrade);

      // Loop through portfolio keys
      for (var key in newTrade) {
        var value = (newTrade[key] || '').toString().trim();

        console.log(key + ' => ' + value);

        // Values is set
        if (value.length > 0) {

          // All values are filled
          if (counter === (newTradeLength - 1)) {
            
            console.log('All values set!');

            /** TODO:
              - Push holdings to portfolio

            */
            // Create new portfolio record
            /*var record = store.createRecord('portfolio', {
              name: portfolio.name,
              cash: parseFloat(portfolio.cash),
              owner: owner
            });

            // Save the portfolio record
            record.save().then(function(_portfolio) {
              self.transitionTo('portfolio', _portfolio.get('id'));
            });

            // Send close action to controller*/
            self.controller.send('closeNewTradeModal');
          }
        } else {
          if (key === 'portfolio') {
            message = 'Please select a portfolio.';
          }

          $('#new-trade-form').find('.form-error').text(message);

          break;
        }

        counter++;
      }
    },
    loading: function() {
      $('#loading').fadeIn(80);
    }
  },
  afterModel: function() {
    $('#loading').fadeOut(80);
  }
});