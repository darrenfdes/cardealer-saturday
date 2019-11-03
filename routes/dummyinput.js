var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('Search for customer  ')
  res.render('searchcustomer');
});

module.exports = router;
