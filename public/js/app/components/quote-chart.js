Plum.QuoteChartComponent = Ember.Component.extend({
  options: {
    animationSteps: 30,
    animationEasing: "easeOutQuart",
    bezierCurve : false,
  },
  drawChart: function() {
    var self = this;
    //var data = [];
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: 'rgba(210, 220, 220, 0.5)',
                strokeColor: "rgba(210, 220, 220, 1)",
                pointStrokeColor: "rgba(210, 220, 220, 1)",
                pointHighlightFill: "rgba(210, 220, 220, 1)",
                pointHighlightStroke: "rgba(210, 220, 220, 1)",
                pointColor: "rgba(230, 240, 240, 1)",
                data: [399, 429, 410, 488, 501, 510, 500, 489, 492, 530, 500, 520]
            }
        ]
    };

    var obj = {
      color: CHART_COLORS[CHART_COLORS.length-1],
      highlight: CHART_COLORS[CHART_COLORS.length-1]
    };

    /*var promise = new Ember.RSVP.Promise(function(res, rej) {
      res(self.get('data'));
      rej('error');
    });*/

    /*promise.then(function(holdings) {
      holdings.forEach(function(holding, i) {
        var _obj = JSON.parse(JSON.stringify(obj));

        _obj.value = holding.get('percent');
        _obj.label = holding.get('id');
        _obj.color = CHART_COLORS[i];

        data.push(_obj);
      });


      // Draw the chart when promise fullfilled
      var ctx = $('#' + self.get('id')).get(0).getContext("2d");
      var quoteChart = new Chart(ctx).Line(data, self.get('options'));
    });*/
    // Draw the chart when promise fullfilled
    console.log(self.get('quote'));
      var ctx = $('#' + self.get('quote')).get(0).getContext("2d");
      var quoteChart = new Chart(ctx).Line(data, self.get('options'));
  },
  didInsertElement: function() {
    this.drawChart();
  }
});