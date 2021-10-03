/**
 * index.js
 * Austin Joyal
 * 301200483
 * Oct 3, 2021
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('content/home', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('content/home', { title: 'Home' });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('content/about', { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('content/projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('content/services', { title: 'Services' });
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('content/contact', { title: 'Contact Me' });
});

module.exports = router;
