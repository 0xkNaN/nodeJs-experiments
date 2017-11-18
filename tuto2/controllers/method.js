
let express = require('express')
  , router = express.Router();

/* Method */

/* GET Method */
router.get('/', function(req, res) {
  let formTest = `
    <form action="/method" method="post">
      <input name="user[name]" placeholder="Enter your name">
      <button>Send a request</button>
    </form>
  `;
  res.send(formTest);
});

/* POST Method */
router.post('/', function(req, res) {
  res.send(req.body.user[name]);
});

/* PUT Method */
router.put('/put', function(req, res) {
  res.send(req.body);
});

/* DELETE Method */
router.delete('/delete', function(req, res) {
  res.send(req.body);
});

// Test API
router.get('/api', function(req, res) {
  let resBody = '';
  if(0 < Object.keys(req.query).length) {
    if(req.query.id) {
      resBody += `
      id = ${req.query.id}
      <br>
       <a href="http://127.0.0.1:8080/method/api">Back</a>
      `;
    }
  } else {
    resBody = `
      Enter your params : 
      <a href="http://127.0.0.1:8080/method/api?id=4444">?name=value</a>
    `;
  }
  res.send(resBody);
});


module.exports = router;