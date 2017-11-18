
var express = require('express');
var app     = express();
var port    = 3000;


// Set View Engine
app.set('view engine', 'pug');

// Serve Static Files
app.use(express.static('public'));


// Listening...
app.listen(port, function() {
  console.log('Server is running on port:', port);
});

// Home page Route
app.get('/', function(req,res) {
  res.render('index');
});

// Set Routes
var itemRouter = require('./src/routes/itemsRoutes');
app.use('/items', itemRouter);
