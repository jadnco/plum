var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var slugify = require('../functions').slugify;

var PortfolioSchema = new Schema({
  name: String,
  slug: {
    type: String,
    unique: true
  },
  value: Number,
  cash: Number,
  overallReturn: Number,
  created: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  transactions: [{
    type: Schema.Types.ObjectId,
    ref: 'Transcation'
  }]
});

PortfolioSchema.pre('save', function(next) {
  this.slug = slugify(this.name);

  next();
});

PortfolioSchema.pre('remove', function(next) {
  // Remove portfolio reference from related user
  this.model('User').update(
    {_id: this.owner},
    {$pull: {portfolios: this._id}},
    next
  );

  // TODO: delete all transactions
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);