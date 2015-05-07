Plum.QuoteController = Ember.ObjectController.extend({
  ticker: function () {
    return this.get('id');
  }.property('ticker'),
  formattedPrice: function () {
    var price = this.get('Ask'),
      formatted = parseFloat(price, 10).toFixed(2);

    return '$' + formatted;
  }.property('price')
});