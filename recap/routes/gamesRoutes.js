var express = require('express');
var gamesRouter = express.Router();

gamesRouter.get('/', function(req, res) {
  res.render('games');
});

module.exports = gamesRouter;