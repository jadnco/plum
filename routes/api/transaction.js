var mongoose = require('mongoose');
var Transaction = require('../../models/transaction');
var Portfolio = require('../../models/portfolio');

module.exports.add = function(req, res) {
  var transaction = new Transaction(req.body.transaction);

  transaction.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      Portfolio.findByIdAndUpdate(transaction.portfolio,
        {$push: {'transactions': transaction._id}},
        {safe: true, upsert: true}, function(err, transaction) {
          if (err) res.send(err);
        }
      );

      res.json({transaction: transaction});
    } 
  });
};

module.exports.getAll = function(req, res) {
  Transaction.find(function(err, transactions) {
    if (err) res.send(err);
    else res.json({transactions: transactions});
  });
};

module.exports.get = function(req, res, query) {
  Transaction.findById(query, function(err, transaction) {
    if (err) res.send(err);
    else res.json({transaction: transaction});
  });
};

module.exports.getByQuery = function(req, res, query) {
  Portfolio.find(query, function(err, portfolio) {
    Transaction.find({_id: {$in: portfolio[0].transactions}}, function(err, transactions) {
      if (err) res.send(err);
      else res.json({transactions: transactions});
    });
  });
};

module.exports.update = function(req, res, id) {
  Transaction.findByIdAndUpdate(id, {$set: req.body.transaction}, function(err, transaction) {
    if (err) res.send(err);
    else res.json({transaction: transaction});
  });
};

module.exports.delete = function(req, res, id) {
  Transaction.findByIdAndRemove(id, function(err, transaction) {
    if (err) res.send(err);

    // Delete reference from portfolio
    Portfolio.findByIdAndUpdate(transaction.portfolio,
      {$pull: {'transactions': transaction._id}}, function(err) {
        if (err) res.send(err);
      });

    // Record no longer exists
    res.sendStatus(200);
  });
};