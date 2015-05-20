Plum.StockSearchComponent = Ember.Component.extend({
  term: '',
  results: '',
  isSearching: false,
  didInsertElement: function() {
    this.results = $('#search-results');
    this.results.addClass('visible');
  },
  focusIn: function() {
    if (this.get('isSearching')) {
      this.results.addClass('visible');
    }
  },
  focusOut: function() {
    this.results.removeClass('visible');
  },
  _search: function() {
    Ember.run.debounce(this, this.search, 200);
  }.observes('term'),
  search: function() {
    this.sendAction('action', this.get('term'));
    this.set('isSearching', true);

    this.results.addClass('visible');
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