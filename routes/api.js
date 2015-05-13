var express = require('express');
var router = express.Router();
var query = require('../functions').query;

/**
* -- Stocks ---------->
*/

var stocks = require('./api/stock');

router.route('/stocks/')
  .get(function(req, res) {
    stocks.get(req, res, req.query.query);
  });

/**
* -- Portfolio ---------->
*/

var portfolios = require('./api/portfolio');

router.route('/portfolios')
  .post(function(req, res) {
    portfolios.add(req, res);
  })
  .get(function(req, res) {
    portfolios.getAll(req, res);
  });

router.route('/portfolios/:q')
  .get(function(req, res) {
    var _query = query(req.params.q, {slug: req.params.q});

    portfolios.get(req, res, _query);
  })
  .put(function(req, res) {
    portfolios.update(req, res, req.params.id);
  })
  .delete(function(req, res) {
    portfolios.delete(req, res, req.params.id);
  });

// Get all portfolios of user
router.route('/users/:uq/portfolios')
  .get(function(req, res) {
    var _query = query(req.params.uq, {username: req.params.uq});

    portfolios.getByQuery(req, res, _query);
  })

/**
* -- Transaction ---------->
*/

var transactions = require('./api/transaction');

router.route('/transactions')
  .post(function(req, res) {
    transactions.add(req, res);
  })
  .get(function(req, res) {
    transactions.getAll(req, res);
  });

router.route('/transactions/:id')
  .get(function(req, res) {
    transactions.get(req, res, req.params.id);
  })
  .put(function(req, res) {
    transactions.update(req, res, req.params.id);
  })
  .delete(function(req, res) {
    transactions.delete(req, res, req.params.id);
  });

// Get all transactions of portfolio
router.route('/portfolios/:pq/transactions')
  .get(function(req, res) {
    var _query = query(req.params.pq, {slug: req.params.pq});

    transactions.getByQuery(req, res, _query);
  })

/**
* -- User ---------->
*/

var users = require('./api/user');

router.route('/users')
  .post(function(req, res) {
    users.add(req, res);
  })
  .get(function(req, res) {
    users.getAll(req, res);
  });

// Single Portfolio route
router.route('/users/:q')
  .get(function(req, res) {
    var _query = query(req.params.q, {username: req.params.q});

    users.get(req, res, _query);
  })
  .put(function(req, res) {
    users.update(req, res, req.params.q);
  })
  .delete(function(req, res) {
    users.delete(req, res, req.params.q);
  });

module.exports = router;