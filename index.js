var http = require('http');
var myDate = require('./myDate');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("The date and time are currently: " + myDate.myDateTime());
  res.end('Hello World!');
}).listen(8080); 