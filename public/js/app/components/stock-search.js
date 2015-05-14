Plum.StockSearchComponent = Ember.Component.extend({
  term: '',
  results: '',
  isSearching: false,
  didInsertElement: function() {
    this.results = $('#search-results');
  },
  focusIn: function() {
    this.results.toggleClass('slide-in');
    this.results.removeClass('slide-out');
  },
  focusOut: function() {
    this.results.toggleClass('slide-out');
    this.results.removeClass('slide-in');
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