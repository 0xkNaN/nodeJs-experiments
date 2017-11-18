
let express = require('express')
  , router = express.Router();


/* GET Users */
router.use('/user', require('./users'));
/* GET Cars */
router.use('/cars', require('./cars'));
/* GET Animals */
router.use('/animals', require('./animals'));
/* Method */
router.use('/method', require('./method'));

/* GET Home */
router.get('/', function(req, res) {
  res.json({"message": "Home Page"});
});
/* GET About */
router.get('/about', function(req, res) {
  res.send('About Page');
});

/* Handle 404 error */
router.use('*', function(req, res) {
  res.send(404, 'Page not found!')
});


module.exports = router;