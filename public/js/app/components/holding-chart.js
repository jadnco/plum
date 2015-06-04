Plum.HoldingChartComponent = Ember.Component.extend({
  options: {
     //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //Number - The width of each segment stroke
    segmentStrokeWidth : 4,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 60, // This is 0 for Pie charts

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false
  },
  _data: function() {
    
  }.property('data'),
  drawChart: function() {
    var self = this;

    var arr  = [];

    var obj = {
      color: '#C3CEF3',
      highlight: "#E35A5E"
    };

    var data = self.get('data');

    var promise = new Ember.RSVP.Promise(function(res, rej) {
      res(data);
      rej('error');
    });

    promise.then(function(data) {
      data.forEach(function(holding) {
        var _obj = JSON.parse(JSON.stringify(obj));

        _obj.value = holding.get('value');
        _obj.label = holding.get('id');

        arr.push(_obj);
      });


      // Draw the chart when promise fullfilled
      var ctx = $('#' + self.get('slug')).get(0).getContext("2d");
      var holdingChart = new Chart(ctx).Doughnut(arr, self.get('options'));
    });
  },
  didInsertElement: function() {
    this.drawChart();
  }
});