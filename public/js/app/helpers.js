/**
* Converts number value '1839048' into '1,839,048'
*/
Ember.Handlebars.helper('withCommas', function(value, opts) {
  if (value != null) {
    var parts = value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return parts.join(".");
  }
  
  return '--';
});

/**
* Converts currency value '18392.99' into '$18,392.99'
*/
Ember.Handlebars.helper('currency', function(value, opts) {
  if (value != null) {
    var parts = value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    return '$' + parts.join(".");
  }
  
  return '--';
});

/**
* Converts time value '10:39am' into '10:39 AM'
*/
Ember.Handlebars.helper('time', function(value, opts) {
  if (value != null) {
    var val = value.toString().toUpperCase();

    // Insert space in between number and capital letter
    val = val.replace(/([0-9])([A-Z])/g, '$1 $2');

    return val + ' EDT';
  }

  return '--';
});

Ember.Handlebars.helper('firstLetter', function(value, opts) {
  if (value != null) {
    return value.toString().charAt(0).toUpperCase();
  }
  
  return '--';
});

/**
* Truncate a long string into an ellipsed string
*/
Ember.Handlebars.helper('truncate', function(length, value, opts) {
  if (value != null) {
    if (value.length <= length) {
      return value;
    }
    
    return value.substring(0, length) + '...';
  }
  
  return '--';
});