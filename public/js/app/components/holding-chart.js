Plum.HoldingChartComponent = Ember.Component.extend({
  options: {
    animationSteps: 20,
    animationEasing: "easeOutQuart",
    segmentShowStroke : false,
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
    
    var counter = 0;

    self.get('holdings').forEach(function(holding) {
      // Create a deep clone of the object
      var _obj = JSON.parse(JSON.stringify(obj));

      _obj.value = holding.get('value');
      _obj.label = holding.get('ticker');

      // If on second last color
      if (counter === CHART_COLORS.length - 1) {
        counter = 0;
      }

      _obj.color = CHART_COLORS[counter];

      // Push obj to data array
      data.push(_obj);

      counter++;
    });

    // Draw the chart when promise fullfilled
    var ctx   = $('#' + self.get('slug')).get(0).getContext("2d");
    var chart = new Chart(ctx).Doughnut(data, self.get('options'));
  },
  didInsertElement: function() {
    this.drawChart();
  }
});