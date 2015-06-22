var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HoldingSchema = new Schema({
  ticker: String,
  shares: Number,
  value: Number,
  overallReturn: Number,
  percent: Number
});

module.exports = HoldingSchema;