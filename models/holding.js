var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HoldingSchema = new Schema({
  ticker: String,
  value: Number,
  overallReturn: Number,
  percent: Number
}, {_id: false});

module.exports = HoldingSchema;