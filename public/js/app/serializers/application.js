Plum.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: 'symbol',
  attrs: {
    //ticker: 'id',
    exchange: 'exchDisp'
  },
  normalizePayload: function(payload) {
    return {stocks: [payload.ResultSet.Result][0]};
  }
});