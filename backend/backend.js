const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;


const server = http.createServer((req, res) => {
  
  if (req.url == '/restricted') {
    res.statusCode = 302;
    res.setHeader('Location', '/login');
    res.end('\n');

  } else if (req.url == '/login') {
    res.statusCode = 200;
    res.end('Internal Login Screen \n');

  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body>hello! <br/> <a href="/restricted"> Access restricted area </a> </body></html>  \n');
    
  }
  
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});