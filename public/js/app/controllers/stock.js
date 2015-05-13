Plum.StockController = Ember.ObjectController.extend({
  ticker: function() {
    return this.get('id');
  }.property('ticker')
});