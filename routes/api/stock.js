var mongoose = require('mongoose');
var http = require('http');

module.exports.get = function(req, res, query) {
  query = escape(query);

  var options = {
    host: 'd.yimg.com',
    path: '/autoc.finance.yahoo.com/autoc?callback=YAHOO.Finance.SymbolSuggest.ssCallback&query=' + query,
    method: 'GET'
  };

  var request = http.request(options, function(_res) {
    var body = '';

    _res.on('data', function(data) {
      body += data;
    });

    _res.on('end', function() {
      var stocks;

      try {
        stocks = JSON.parse(body);
      } catch (e) {
        // Remove JSONP padding
        var _s = body.indexOf('({');
        var _e = body.indexOf('})');

        stocks = JSON.parse(body.substring(_s + 1, _e + 1));

        var results = stocks.ResultSet.Result;

        // Loop through Result array
        for (var i in results) {
          // Create new key/value pairs
          results[i].ticker = results[i].symbol;
          results[i].exchange = results[i].exchDisp;

          // Delete key/value pairs from object
          delete results[i].symbol;
          delete results[i].exch;
          delete results[i].exchDisp;
          delete results[i].type;
          delete results[i].typeDisp;
        }
      }

      res.json(stocks);
    });
  });

  request.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });

  request.end();
};