Plum.QuoteController = Ember.ObjectController.extend({
  ticker: function () {
    return this.get('id').toUpperCase();
  }.property('ticker'),
  price: function() {
    var price = this.get('LastTradePriceOnly'),
      formatted = parseFloat(price, 10).toFixed(2);

    return '$' + formatted;
  }.property('price')
});