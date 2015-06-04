Plum.HoldingChartComponent = Ember.Component.extend({
  options: {
    animationSteps: 30,
    animationEasing: "easeOutQuart",
    segmentShowStroke : true,
    segmentStrokeWidth : 4,
    percentageInnerCutout : 60,
    animateRotate : true,
    animateScale : false
  },
  drawChart: function() {
    var self = this;
    var data = [];

    var obj = {
      color: CHART_COLORS[CHART_COLORS.length-1],
      highlight: CHART_COLORS[CHART_COLORS.length-1]
    };

    var promise = new Ember.RSVP.Promise(function(res, rej) {
      res(self.get('data'));
      rej('error');
    });

    promise.then(function(holdings) {
      holdings.forEach(function(holding, i) {
        var _obj = JSON.parse(JSON.stringify(obj));

        _obj.value = holding.get('percent');
        _obj.label = holding.get('id');
        _obj.color = CHART_COLORS[i];

        data.push(_obj);
      });


      // Draw the chart when promise fullfilled
      var ctx = $('#' + self.get('slug')).get(0).getContext("2d");
      var holdingChart = new Chart(ctx).Doughnut(data, self.get('options'));
    });
  },
  didInsertElement: function() {
    this.drawChart();
  }
});