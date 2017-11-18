
let express = require('express')
  , router = express.Router();


/* GET /cars */
router.get('/', function(req, res) {
  res.send('Cars ...');
});

/* GET /cars/rands */
router.get('/brands', function(req, res) {
  res.send('BMW, Audi, ...');
});

/* GET /cars/models */
router.get('/models', function(req, res) {
  res.send('Audi Q7, BMW X5, ...');
});

module.exports = router;