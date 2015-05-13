Plum.StockSearchComponent = Ember.Component.extend({
  term: '',
  results: '',
  isSearching: false,
  didInsertElement: function() {
    this.results = $('#search-results');
  },
  focusIn: function() {
    this.results.show();
  },
  focusOut: function() {
    this.results.hide();
    console.log('FOCUSED OUT');
  },
  _search: function() {
    Ember.run.debounce(this, this.search, 200);
  }.observes('term'),
  search: function() {
    this.sendAction('action', this.get('term'));
    this.set('isSearching', true);
  },
  actions: {
    clearSearch: function() {
      this.set('term', '');
      this.set('isSearching', false);
      this.set('stocks', '');

      $('#main-search input').val('');
    }
  }
});