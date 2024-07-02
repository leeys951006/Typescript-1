import http from 'http';

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('이연승');
      res.end();
    }
  }
});

server.listen(3000, () => {
  console.log(`https:localhost:3000`);
});
