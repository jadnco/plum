Plum.StockSearchComponent = Ember.Component.extend({
  term: '',
  actions: {
    search: function() {
      console.log(this.get('term'));
      this.sendAction('action', this.get('term'));
      console.log("the component action was called.");
    }
  },
  search: function() {

    var term = this.get('term');
    this.send('search');

    console.log('You typing something in');
  }.observes('term')
});