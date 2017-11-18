
var http = require('http');


http.createServer(function(req, res) {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-type', 'text/html');
  res.setHeader('Set-cookie', 'test1=test1ValueN; test2=test2ValueN');
  res.sendDate = false;

  res.writeHead(200, {
    'X-Powered-by' : 'Bulldozerinc'
  });


  // Test Request Object
  //console.log(req.method);

  res.end('test server 3001');

  // Events
  res.on('close', function() {
    console.log('Close Event')});
  res.on('finish', function() {
    console.log('Finish Event')});


})
  .listen(3001);


// request.headers
//{ host: '127.0.0.1:3001',
  //connection: 'keep-alive',
  //pragma: 'no-cache',
  //'cache-control': 'no-cache',
  //'upgrade-insecure-requests': '1',
  //'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
  //accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  //'accept-encoding': 'gzip, deflate, br',
  //'accept-language': 'fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4,ar;q=0.2',
  //cookie: '_ga=GA1.1.1236192003.1506607961; __ar_v4=Y46ALQSR3FENPHG7DWAX46%3A20171004%3A7%7CQOPKIUWSMVAOHCDA5LKXFL%3A20171004%3A7%7CEKZYWJPTOZEBLNE76AZ4QZ%3A20171004%3A7; test=test; cookieName=cookieValue; name=hassen; lang=en; [object Object]; test2=test2Value; test1=test1ValueN; PHPSESSID=b952825998cceb6128e3587b9d239abb; private_content_version=f3f28129740d6c971a83bdc3b9e15b7d; store=fr; form_key=4LjQU3pQedNKquzN' }
