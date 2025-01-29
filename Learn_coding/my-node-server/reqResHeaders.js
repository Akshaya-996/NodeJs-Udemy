//Setting headers in Node.js
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'application/json',
//         'Cache-Control': 'no-cache'
//     });
//     res.end(JSON.stringify({ message: 'Hello, World!' }));
// })
// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000');
//   });

//Headers with Express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.set('X-Custom-Header', 'CustomValue');
  res.json({ message: 'Hello, World!' });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});