Plum.QuoteSerializer = DS.RESTSerializer.extend({
  primaryKey: 'symbol',
  normalizePayload: function(payload) {
    return {quote: payload.query.results.quote};
  }
});