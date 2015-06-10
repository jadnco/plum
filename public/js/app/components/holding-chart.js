Plum.HoldingChartComponent = Ember.Component.extend({
  options: {
    animationSteps: 30,
    animationEasing: "easeOutQuart",
    segmentShowStroke : false,
    segmentStrokeWidth : 0,
    percentageInnerCutout : 75,
    animateRotate : true,
    animateScale : false
  },
  drawChart: function() {
    var self = this;
    var data = [];

    var obj = {
      highlight: CHART_COLORS[CHART_COLORS.length-1]
    };

    self.get('holdings').forEach(function(holding, i) {
      // Create a deep clone of the object
      var _obj = JSON.parse(JSON.stringify(obj));

      _obj.value = holding.get('percent');
      _obj.label = holding.get('ticker');
      _obj.color = CHART_COLORS[i];

      // Push obj to data array
      data.push(_obj);
    });

    // Draw the chart when promise fullfilled
    var ctx   = $('#' + self.get('slug')).get(0).getContext("2d");
    var chart = new Chart(ctx).Doughnut(data, self.get('options'));
  },
  didInsertElement: function() {
    this.drawChart();
  }
});