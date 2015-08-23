Plum.QuoteSerializer = DS.RESTSerializer.extend({
  primaryKey: 'symbol',
  // Add thingy here
  normalizePayload: function(payload) {
    return {quote: payload.query.results.quote};
  },
  keyForAttribute: function(attr) {
    var str = Ember.String.camelize(attr);
    
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
});