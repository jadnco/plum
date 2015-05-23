Plum.QuoteRoute = Ember.Route.extend({
  model: function(params) {
    var url = 'yql?q=';

    var query = 'select * from yahoo.finance.quotes where symbol in ("';
    query += params.ticker + '")';

    url += encodeURIComponent(query);
    url += '&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=';
    
    return this.store.find('quote', url);
  },
  setupController: function(controller, quote) {
    controller.set('model', quote);
  },
  actions: {
    loading: function() {
      $('#loading').fadeIn(80);
    }
  },
  afterModel: function() {
    $('#loading').fadeOut(80);
  }
});