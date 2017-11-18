
var express = require('express');
var languagesRoute = express.Router();

languagesRoute.get('/', function(req, res) {
  res.render('languages');
});

module.exports = languagesRoute;