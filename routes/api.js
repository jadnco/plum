var express = require('express');
var router = express.Router();

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

router.route('/portfolios/:id')
  .get(function(req, res) {
    portfolios.get(req, res, req.params.id);
  })
  .put(function(req, res) {
    portfolios.update(req, res, req.params.id);
  })
  .delete(function(req, res) {
    portfolios.delete(req, res, req.params.id);
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
    var query = {$or: [{username: req.params.q}]};

    if (req.params.q.match(/^[0-9a-fA-F]{24}$/)) {
      query.$or.push({_id: req.params.q});
    }

    users.get(req, res, query);
  })
  .put(function(req, res) {
    users.update(req, res, req.params.id);
  })
  .delete(function(req, res) {
    users.delete(req, res, req.params.id);
  });

module.exports = router;