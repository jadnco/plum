Plum.PortfolioController = Ember.ObjectController.extend({
  newDeposit: {
    cash: null
  },
  holdings: function() {
    console.log('some holdings');
    var self     = this,
        holdings = self.get('model.holdings'),
        results  = [];

    /** TODO:
      - Store holding changes in localStorage
    */

    holdings.forEach(function(holding) {
      self.store.find('quote', holding.get('ticker')).then(function(quote) {
        holding.set('dayChange', quote.get('change'));
        holding.set('dayChangePercent', quote.get('percentChange'));

        results.push(holding);
        console.log(holding.get('ticker') + ' ' + holding.get('dayChange') + ' (' + holding.get('dayChangePercent') +  ')');
      });
    });

    // Save portfolio w/ updated holdings
    self.get('model').save();

    return results;
  }.property('holdings.@each'),
  actions: {
    showNewDepositModal: function() {
      $('#new-deposit-modal').find('.modal').addClass('visible');
      $('#new-deposit-modal').find('.overlay').addClass('visible');
    },
    closeNewDepositModal: function() {
      this.set('newDeposit.cash', null);

      $('#new-deposit-modal').find('.modal').removeClass('visible');
      $('#new-deposit-modal').find('.overlay').removeClass('visible');

      // Clear values
      $('#new-deposit-modal').find('input[name=cash]').val('');
      $('#new-deposit-modal').find('.form-error').text('');
      $('#new-deposit-modal').find('.total-value').text('');
    }
  }
});