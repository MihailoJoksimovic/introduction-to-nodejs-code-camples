const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Zdravo svete\n');
});

server.listen(port, hostname, () => {
  console.log(`Server je pokrenut na adresi http://${hostname}:${port}/`);
});

