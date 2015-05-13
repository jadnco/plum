Plum.ApplicationSerializer = DS.RESTSerializer.extend({
  attrs: {
    ticker: 'symbol',
    exchange: 'exchDisp'
  },
  normalizePayload: function(payload) {
    return {stocks: payload.ResultSet.Result};
  }
});