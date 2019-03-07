var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/301-diesel', function(req, res, next) {
  res.render('301-diesel/301-diesel', { title: 'Express' });
});

router.get('/301-diesel-thanks', function(req, res, next) {
  res.render('301-diesel/301-diesel-thanks', { title: 'Express' });
});

router.get('/eurotrip', function(req, res, next) {
  res.render('eurotrip/eurotrip', { title: 'Express' });
});

router.get('/eurotrip-thanks', function(req, res, next) {
  res.render('eurotrip/eurotrip-thanks', { title: 'Express' });
});

router.get('/servicios-postventa', function(req, res, next) {
  res.render('postventa/postventa', { title: 'Express' });
});

router.get('/iframe-servicios-postventa', function(req, res, next) {
  res.render('iframe-postventa/postventa', { title: 'Express' });
});

router.get('/servicios-postventa-thanks', function(req, res, next) {
  res.render('postventa/postventa-thanks', { title: 'Express' });
});

router.get('/iframe-servicios-postventa-thanks', function(req, res, next) {
  res.render('iframe-postventa/postventa-thanks', { title: 'Express' });
});

module.exports = router;
