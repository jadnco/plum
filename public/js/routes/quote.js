Plum.QuoteRoute = Ember.Route.extend({
  model: function(params) {
    /*var url = 'yql?q=';

    var query = 'select * from yahoo.finance.quotes where symbol="';
    query += params.ticker;

    url += escape(query);
    url += '%22&format=jsonenv=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=';
    
    console.log(url);
    return this.store.find('quote', url);*/
    var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22)%0A%09%09&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=';
    var data = '';

    $.ajax({
      url: url,
      type: 'get',
      success: function(data) {
        return data;
      },
      error: function() {
        console.log('some error');
      }
    });
    console.log(data);
    return data;
  },
  setupController: function(controller, model) {
    console.log(model);
      controller.set("model", model);
    }
});