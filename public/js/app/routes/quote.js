Plum.QuoteRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('quote', params.ticker);
  },
  setupController: function(controller, quote) {
    controller.set('model', quote);
  },
  actions: {
    addToPortfolio: function() {
      var self  = this,
          store = self.store,
          newTrade = self.controller.get('newTrade');

      // Set trade value; round to two decimals
      newTrade.value = decimals(2, newTrade.shares * newTrade.price);

      var tradeData = {
        ticker: newTrade.ticker,
        lastPrice: parseFloat(newTrade.price),
        costBasis: parseFloat(newTrade.value),
        shares: parseInt(newTrade.shares),
        marketValue: parseFloat(newTrade.value),
        overallReturn: null,
        overallGain: null,
        dayChange: null
      };

      if (checkFields($('#new-trade-form'), newTrade)) {
        store.find('portfolio', newTrade.portfolio).then(function(portfolio) {
          // Make sure there is enough cash to cover buy
          if (tradeData.value > portfolio.get('cash')) {
            message = 'There isn\'t enough cash to cover this purchase.';

            $('#new-trade-form').find('.form-error').text(message);
          } else {
            var _trade = store.createRecord('holding', tradeData),
                _cash  = portfolio.get('cash'),
                transaction = store.createRecord('transaction', {
                  type: 'buy',
                  ticker: tradeData.ticker,
                  shares: tradeData.shares,
                  price: tradeData.lastPrice,
                  value: tradeData.costBasis,
                  portfolio: portfolio.get('_id')
                });

            portfolio.get('transactions').pushObject(transaction);

            /** TODO:
              - If holding already exists from share, don't create new one
            */

            // Push the new purchase to holdings
            portfolio.get('holdings').pushObject(_trade);
            
            // Subtract purchase value from cash
            portfolio.set('cash', (_cash - tradeData.costBasis));

            // Save record to the database
            portfolio.save();

            console.log('portfolio saved');

            // Send close action to controller
            self.controller.send('closeNewTradeModal');
          }
        });
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