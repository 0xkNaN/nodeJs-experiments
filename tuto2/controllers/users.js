
let express = require('express')
  , router = express.Router();

// Middleware using Routers
router.use('/:name', function(req, res, next) {
  if(req.params.name.toString() === '0') {
    res.send('No null, please!');
  }
  next();
});

/* GET /User */
/*
router.get('/', function(req, res) {
  res.redirect('/');
});
*/
/* GET /User/:name */
router.get('/:name?', function(req, res) {
  if (req.params.name) {
    console.log(req.params);
    res.send(`Hello, ${req.params.name} !`);
  } else {
    res.redirect('/');
  }
});


module.exports = router;