// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.method === 'GET' && req.url === '/users') {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end('List of users');
//     } else if(req.method === 'POST' && req.url === '/users'){
//         res.writeHead(201, {'Content-Type': 'text/plain'});
//         res.end('User created');
//     }else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//       }
// })
// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
//   });

const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => res.send('User list'));
router.get(':/id', (req, res) => res.send(`User ID: ${req.params.id}`));

app.use('/users', router);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

