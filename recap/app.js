
var express = require('express');
var app     = express();
var port    = 3000;

// Listening...
app.listen(port, function() {
  console.log('Server is up!');
});

// Set view engine
app.set('view engine', 'pug');

// Serve Static Files
app.use(express.static('public'));


// Home Route
app.get('/', function(req, res) {
  res.render('home');
});

// Games Sections Routes
var sectionsRoute = require('./routes/gamesRoutes');
app.use('/games', sectionsRoute);

// Languages Section Routes
var languagesRoute = require('./routes/languagesRoutes');
app.use('/languages', languagesRoute);