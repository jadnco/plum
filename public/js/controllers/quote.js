Plum.QuoteController = Ember.ObjectController.extend({
  ticker: function () {
    return this.get('id').toUpperCase();
  }.property('id'),
  price: function() {
    var price = this.get('lastTradePriceOnly'),
      formatted = parseFloat(price, 10).toFixed(2);

    return '$' + formatted;
  }.property('lastTradePriceOnly').volatile()
});