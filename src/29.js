// Node.js script to demonstrate a simple HTTP server and client connection

const http = require('http');

http.createServer((req, res) => {
  if (req.url === '/') {
    // Serve index.html file
    const html = fs.readFileSync('./index.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else {
    // Serve static files (e.g., JavaScript, CSS)
    if (req.url.startsWith('/static/')) {
      const filePath = req.url.split('/')[1];
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    } else {
      // Serve index.html file
      const html = fs.readFileSync('./index.html', 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    }
  }
}).listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
