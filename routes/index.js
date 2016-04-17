var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Facebook Data' });
});
router.get('/login', function(req, res, next) {
  res.render('auth/facebook_login', {title: 'Facebook Login'});
});

module.exports = router;
