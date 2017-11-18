
let express = require('express')
  , app = express()
  , host = '127.0.0.1'
  , port = 8080;


// Routes
app.use('/', require('./controllers'));

// Start The Server
app.listen(port, host, function() {
  console.log(`The Server is listening on ${host}:${port}`);
});
