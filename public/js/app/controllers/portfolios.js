Plum.PortfoliosController = Ember.ArrayController.extend({
  itemController: 'portfolio',
  rows: Ember.computed('portfolios.[]', function() {
    var portfolios = this.get('model');
    var rows = [];
    var rowLength = 3;

    portfolios.forEach(function(portfolio, i) {
      if (i % rowLength === 0) rows.pushObject([]);

      rows.get('lastObject').pushObject(portfolio);
    });

    return rows;
  })
});