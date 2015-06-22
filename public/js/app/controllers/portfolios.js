/**
* public/js/app/controllers/portfolios.js
* -
* Controller for portfolios
*/
Plum.PortfoliosController = Ember.ArrayController.extend({
  // Reference a singular portfolio
  itemController: 'portfolio',
  rows: Ember.computed('portfolios.[]', function() {
    var portfolios = this.get('model');
    var rows = [];
    var rowLength = 3;

    // Split all portfolios in matrix
    portfolios.forEach(function(portfolio, i) {
      if (i % rowLength === 0) rows.pushObject([]);

      rows.get('lastObject').pushObject(portfolio);
    });

    return rows;
  })
});