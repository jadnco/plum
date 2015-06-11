Plum.QuoteController = Ember.ObjectController.extend({
  needs: 'application',
  newTrade: function() {
    return {
      ticker: this.get('ticker'),
      shares: null,
      price: this.get('price'),
      value: null,
      portfolio: null
    };
  }.property('ticker', 'price'),
  ad: function() {
    var change = this.get('percentChange');

    if (change !== null) {
      // Check if stock declined
      if (change.indexOf('-') === 0) {
        return 'decline';
      }

      // Check if stock advanced
      if (change.indexOf('+') === 0) {
        return 'advance';
      }
    }
    
    return '';
  }.property('percentChange'),
  ticker: function () {
    return this.get('id').toUpperCase();
  }.property('id'),
  price: function() {
    return this.get('lastTradePriceOnly');
  }.property('lastTradePriceOnly'),
  actions: {
    showNewTradeModal: function() {
      $('#new-trade-modal').find('.modal').addClass('visible');
      $('#new-trade-modal').find('.overlay').addClass('visible');
    },
    closeNewTradeModal: function() {
      // Reset trade properties
      this.set('newTrade.shares', null);
      this.set('newTrade.value', null);
      this.set('newTrade.portfolio', null);

      $('#new-trade-modal').find('.modal').removeClass('visible');
      $('#new-trade-modal').find('.overlay').removeClass('visible');

      // Clear values
      $('#new-trade-modal').find('input[name=shares]').val('');
      $('#new-trade-modal').find('.form-error').text('');
      $('#new-trade-modal').find('.total-value').text('');
      $('#new-trade-modal').find('select option:nth-of-type(1)').attr('selected', true);
    }
  }
});