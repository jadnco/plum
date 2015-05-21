Plum.QuoteController = Ember.ObjectController.extend({
  needs: 'application',
  ad: function() {
    var change = this.get('percentChange');

    if (change != null) {
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
    return this.get('lastTradePriceOnly')
  }.property('lastTradePriceOnly')
});