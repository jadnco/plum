Plum.ApplicationController = Ember.ObjectController.extend({
  ticker: function() {
    return this.get('symbol');
  }.property('ticker')
});