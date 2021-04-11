const http = require('http');
var os = require("os");
const hostname = '0.0.0.0';
const port = 3000;
var hostname1 = os.hostname();
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello World</br>');
  var datetime = new Date();
  res.write(datetime.toString());
  res.write(hostname1)
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
   var datetime = new Date();
    console.log(datetime);
});

