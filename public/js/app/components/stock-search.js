Plum.StockSearchComponent = Ember.Component.extend({
  term: '',
  results: null,
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
    // Make sure the field isn't empty
    if (this.get('term').trim().length > 0) {
      this.results.find('#indicator').show();

      Ember.run.debounce(this, this.search, 200);
    }
  }.observes('term'),
  search: function() {
    this.sendAction('action', this.get('term'));
  
    this.results.find('#indicator').hide();

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