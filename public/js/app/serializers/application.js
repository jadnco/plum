Plum.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: 'symbol',
  attrs: {
    //ticker: 'id',
    exchange: 'exchDisp'
  },
  normalizePayload: function(payload) {
    console.log({stocks: [payload.ResultSet.Result][0]});
    return {stocks: [payload.ResultSet.Result][0]};
  }
});