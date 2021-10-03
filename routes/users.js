/**
 * users.js
 * Austin Joyal
 * 301200483
 * Oct 3, 2021
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
