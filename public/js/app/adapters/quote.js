Plum.QuoteAdapter = DS.RESTAdapter.extend({
  host: 'http://query.yahooapis.com',
  namespace: 'v1/public',
  buildURL: function(type, id) {
    var url = [];
    var host = this.get('host');
    var prefix = this.urlPrefix();

    url.push(id);

    if (prefix) { url.unshift(prefix); }

    url = url.join('/');
    if (!host && url) { url = '/' + url; }

    return url;
  }
});