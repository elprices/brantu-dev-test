var express = require('express');
var router = express.Router();

/* ADD THE HTTP ROUTE HERE */
router.get('/', function(req, res, next) {
  // i.e. res.status(200)
  //          .render('index', { title: 'Express' });
});

module.exports = router;