// Get the length of an object
var length = function(obj) {
  return Object.keys(obj).length;
};

// Round a value to desired decimal length
var decimals = function(length, value) {
  return Math.round((value) * Math.pow(10, length)) / Math.pow(10, length);
};


// Returns a message in form context
// ctx = form node
// fields = array
// values = object of value/keys

var checkFields = function(ctx, values) {
  var counter = 0,
      message = '';

  // Loop through keys
  for (var key in values) {
    var value = (values[key] || '').toString().trim();

    // Check if value is set
    if (value.length > 0) {

      // All values are filled
      if (counter === (length(values) - 1)) {
        return true;
      }
    } else {
      message = 'Please set ' + key + '.';

      ctx.find('.form-error').text(message);

      return false;
    }

    counter++;
  }
};