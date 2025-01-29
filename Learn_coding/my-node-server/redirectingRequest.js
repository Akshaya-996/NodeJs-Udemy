// const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.writeHead(302, { Location: '/new-url' });
//         res.end();
//     }else if(req.url === '/new-url') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('You have been redirected!');
//     }else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//       }
// })
// server.listen(3000, () => console.log('Server running at http://localhost:3000'));

const express = require('express');
const app = express();

app.get('/temp', (req, res) => {
    res.redirect('/new-temp');
})

app.get('/perm', (req, res) => {
    res.redirect(301, '/new-perm');
});

app.get('/new-temp', (req, res) => {
    res.send('Temporary redirect target.');
});
  
  app.get('/new-perm', (req, res) => {
    res.send('Permanent redirect target.');
});
  
app.listen(3000, () => console.log('Server running at http://localhost:3000'));