var express = require('express');
var router = express.Router();

var portfolios = require('./api/portfolio');

router.route('/portfolios')
  .post(function(req, res) {
    portfolios.add(req, res);
  })
  .get(function(req, res) {
    portfolios.getAll(req, res);
  });

// Single Portfolio route
router.route('/portfolios/:_id')
  .get(function(req, res) {
    portfolios.get(req, res, req.params._id);
  })
  .put(function(req, res) {
    portfolios.update(req, res, req.params._id);
  })
  .delete(function(req, res) {
    portfolios.delete(req, res, req.params._id);
  });

module.exports = router;