Ember.Handlebars.helper('withCommas', function(value, opts) {
  var parts = value.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return parts.join(".");
});