Plum.StockSerializer = DS.RESTSerializer.extend({
  primaryKey: 'symbol',
  normalizePayload: function(payload) {

    console.log({stock: payload.ResultSet.Result});
    return {stock: payload.ResultSet.Result};
  }
});