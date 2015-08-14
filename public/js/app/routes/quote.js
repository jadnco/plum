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
      var tradeData = {
        ticker: newTrade.ticker,
        value: parseFloat(newTrade.value),
        shares: parseInt(newTrade.shares),
        overallReturn: null,
        percent: null
      };

      var counter = 0;

      // Loop through portfolio keys
      for (var key in newTrade) {
        var value = (newTrade[key] || '').toString().trim();

        // Value is set
        if (value.length > 0) {

          // All values are filled
          if (counter === (newTradeLength - 1)) {
            store.find('portfolio', newTrade.portfolio).then(function(portfolio) {
              var _trade = store.createRecord('holding', tradeData);

              portfolio.get('holdings').pushObject(_trade);

              // Save record to the database
              portfolio.save();
            });

            // Send close action to controller
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

      console.log('------------------/');
    },
    loading: function() {
      $('#loading').fadeIn(80);
    }
  },
  afterModel: function() {
    $('#loading').fadeOut(80);
  }
});