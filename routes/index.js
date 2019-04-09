var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('the-lion-moment/index', { title: 'Express' });
});

// 301 DIESEL FEBRERO 2019
router.get('/301-diesel', function(req, res, next) {
  res.render('301-diesel/301-diesel', { title: 'Express' });
});

router.get('/301-diesel-thanks', function(req, res, next) {
  res.render('301-diesel/301-diesel-thanks', { title: 'Express' });
});

// THE LION MOMENT
router.get('/the-lion-moment', function(req, res, next) {
  res.render('the-lion-moment/index', { title: 'Express' });
});

router.get('/the-lion-moment-thanks', function(req, res, next) {
  res.render('the-lion-moment/thanks', { title: 'Express' });
});



// EUROTRIP FEBRERO 2019
router.get('/eurotrip', function(req, res, next) {
  res.render('eurotrip/eurotrip', { title: 'Express' });
});

router.get('/eurotrip-thanks', function(req, res, next) {
  res.render('eurotrip/eurotrip-thanks', { title: 'Express' });
});

// EUROTRIP 301 MARZO 2019
router.get('/eurotrip-301', function(req, res, next) {
  res.render('301-marzo/301-marzo', { title: 'Express' });
});

router.get('/eurotrip-301-thanks', function(req, res, next) {
  res.render('301-marzo/301-marzo-thanks', { title: 'Express' });
});


// NUEVO 3008 ACTIVE
router.get('/nuevo-3008-active', function(req, res, next) {
  res.render('3008-active/index', { title: 'Express' });
});

router.get('/nuevo-3008-active-thanks', function(req, res, next) {
  res.render('3008-active/thanks', { title: 'Express' });
});

// NUEVO 3008 GTLINE
router.get('/nuevo-3008-gtline', function(req, res, next) {
  res.render('3008-gtline/index', { title: 'Express' });
});

router.get('/nuevo-3008-gtline-thanks', function(req, res, next) {
  res.render('3008-gtline/thanks', { title: 'Express' });
});

//SERVICIO POSTVENTA
router.get('/servicios-postventa', function(req, res, next) {
  res.render('postventa/postventa', { title: 'Express' });
});

router.get('/servicios-postventa-thanks', function(req, res, next) {
  res.render('postventa/postventa-thanks', { title: 'Express' });
});

router.get('/iframe-servicios-postventa', function(req, res, next) {
  res.render('iframe-postventa/postventa', { title: 'Express' });
});

router.get('/iframe-servicios-postventa-thanks', function(req, res, next) {
  res.render('iframe-postventa/postventa-thanks', { title: 'Express' });
});

module.exports = router;
