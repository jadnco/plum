Plum.StockSerializer = DS.RESTSerializer.extend({
  primaryKey: 'ticker',
  normalizePayload: function(payload) {
    return {stocks: [payload.ResultSet.Result][0]};
  }
});
