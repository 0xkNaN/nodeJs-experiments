
let http = require('http'),
  host = '127.0.0.1',
  port = 3000;



function serverHandler(req, res) {

  // Custom Routes
  console.log(req.url);
  console.log(req.method);
  // Get Favicon
  if (req.url.toLowerCase() === '/' && req.method.toLowerCase() === 'get') {
    res.statusCode = 200;
    res.statusMessage = 'Everything OK!!';
  }
  // Get Home Page
  if (req.url.toLowerCase() === '/favicon.ico' && req.method.toLowerCase() === 'get') {
    res.statusCode = 200;
    res.statusMessage = 'Fuck you';
  }


  res.writeHead(200, {
    'Content-type' : 'text/plain',
    'X-Powered-by' : 'the one and the only ME'
  });
  res.write('this is the first chunck of the Response body', 'utf8');
  res.end();
}


http.createServer(serverHandler)
  .listen(port, host, function() {
  console.log('Listening...')
});