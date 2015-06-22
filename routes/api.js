/**
* routes/api.js
* -
* Define all API routes
*/
var express = require('express');
var router = express.Router();
var query = require('../functions').query;

/**
* -- Stocks ---------->
*/

var stocks = require('./api/stock');

router.route('/stocks')
  .get(function(req, res) {
    stocks.get(req, res, req.query.query);
  });

/**
* -- Portfolio ---------->
*/

var portfolios = require('./api/portfolio');

router.route('/portfolios/:q')
  .get(function(req, res) {
    var _query = query(req.params.q, {slug: req.params.q});

    portfolios.get(req, res, _query);
  })
  .put(function(req, res) {
    var _query = query(req.params.q, {slug: req.params.q});

    portfolios.update(req, res, _query);
  })
  .delete(function(req, res) {
    var _query = query(req.params.q, {slug: req.params.q});
    portfolios.delete(req, res, _query);
  });

// Get all portfolios of a certain user
router.route('/portfolios')
  .get(function(req, res) {
    if (req.query.user !== undefined) {
      var _query = query(req.query.user, {username: req.query.user});

      portfolios.getByQuery(req, res, _query);
    } else {
      portfolios.getAll(req, res);
    }
  })
  .post(function(req, res) {
    portfolios.add(req, res);
  });

/**
* -- Transaction ---------->
*/

var transactions = require('./api/transaction');

router.route('/transactions')
  .post(function(req, res) {
    transactions.add(req, res);
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
router.route('/portfolios/:q/transactions')
  .get(function(req, res) {
    var _query = query(req.params.q, {slug: req.params.q});

    transactions.getByQuery(req, res, _query);
  });

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
    var _query = query(req.params.q, {username: req.params.q});

    users.update(req, res, _query);
  })
  .delete(function(req, res) {
    var _query = query(req.params.q, {username: req.params.q});

    users.delete(req, res, _query);
  });

module.exports = router;