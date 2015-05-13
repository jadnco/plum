Plum.StockSearchComponent = Ember.Component.extend({
  term: '',
  s: function() {
    Ember.run.debounce(this, this.search, 300);
  }.observes('term'),
  search: function() {
    var term = this.get('term');

    this.sendAction('action', term)
  }
});