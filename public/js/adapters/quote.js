Plum.QuoteAdapter = DS.RESTAdapter.extend({
  host: 'http://query.yahooapis.com',
  namespace: 'v1/public',
  buildURL: function(type, id) {
    type = !1;
    var url = this._super(type, id);
    return url;
  }
});