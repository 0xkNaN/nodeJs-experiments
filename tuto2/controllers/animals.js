
let express = require('express')
  , router = express.Router();

/* GET /animals */
router.get('/', function(req, res, next) {
  res.send('Animals...');
});

/* GET /animals/domestic */
router.get('/domestic', function(req, res, next) {
  res.send('Cow, Horse, Sheep');
});

/* GET /animals/wild */
router.get('/wild', function(req, res, next) {
  res.send('Wolf, Fox, Eagle');
});

module.exports = router;