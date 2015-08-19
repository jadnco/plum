Plum.StockSearchComponent = Ember.Component.extend({
  term: '',
  results: null,
  isSearching: false,
  didInsertElement: function() {
    this.results = $('#search-results');
    this.results.addClass('visible');
  },
  focusIn: function() {
    this.results.addClass('visible');

    this.results.find('#indicator').hide();

    if (this.get('term').trim().length === 0 && !this.get('isSearching')) {
      this.send('clearSearch');
    }
  },
  focusOut: function() {
    this.results.removeClass('visible');
    
    if (this.get('term').trim().length === 0 &&
        this.set('isSearching') === true) {

      this.set('isSearching', false);
    }
  },
  _search: function() {
    // Make sure the field isn't empty
    if (this.get('term').trim().length > 0) {
      // Show loading indicator
      this.results.find('#indicator').show();

      // Remove the old search results
      this.results.find('#indicator').nextAll().remove();

      Ember.run.debounce(this, this.search, 200);
    } else {
      this.results.find('#indicator').hide();
    }
  }.observes('term'),
  search: function() {
    var defer = Ember.RSVP.defer(),
        self = this;

    // Hide indicator when resolved
    defer.promise.then(function() {
      self.results.find('#indicator').hide();
    });

    this.sendAction('action', this.get('term').trim(), defer);

    this.set('isSearching', true);
  },
  actions: {
    clearSearch: function() {
      this.set('term', '');
      this.set('isSearching', false);
      this.set('stocks', '');

      // Clear the search input
      $('#main-search input').val('');
    }
  }
});