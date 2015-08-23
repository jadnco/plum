Plum.QuoteAdapter = DS.RESTAdapter.extend({
  host: 'http://query.yahooapis.com',
  namespace: 'v1/public',
  buildURL: function(type, id) {
    var url = [];
    var host = this.get('host');
    var prefix = this.urlPrefix();

    var start = 'yql?q=';

    var query = 'select * from yahoo.finance.quotes where symbol in ("';
    query += id + '")';

    start += encodeURIComponent(query);
    start += '&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=';

    url.push(start);

    if (prefix) { url.unshift(prefix); }

    url = url.join('/');
    
    if (!host && url) { url = '/' + url; }

    return url;
  }
});