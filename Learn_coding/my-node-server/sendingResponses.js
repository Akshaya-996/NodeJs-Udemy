// const http = require('http');

// const server = http.createServer((req, res) => {
//     //set Status code and headers
//     res.writeHead(200, {'Content-Type': 'text/plain' });

//     //send the response body
//     res.end('Hello, World!');

// })

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// })

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World'); // Automatically sets content-type
// })

// app.get('/data', (req, res) => {
//     res.status(200).json({message:'Data retrieved successfully', data:[1,2,3]});
// })

// app.get('/headers', (req, res) => {
//     res.set('Cache-Control', 'no-cache');
//     res.send('Headers set!');
// })

// app.get('/notfound', (req, res) => {
//     res.status(404).send('Resource not found');
// })
// app.listen(3000, () => console.log('Server running on http://localhost:3000'));

//Handling Responses Header
// const http = require('http');

// const server = http.createServer((req, res) => {
//     //set Status code and headers
//     res.writeHead(200, {
//         'Content-Type': 'text/plain',
//         'Cache-Control':'no-cache'
//     });

//     //send the response body
//     res.end(JSON.stringify({message:'Hello, World!'}));

// })

// const express = require('express');
// const app = express();
// app.get('/headers', (req, res) => {
//     res.set({
//         'Content-Type':'text/html',
//         'X-Custom-Header':'CustomValue'
//     })
//     res.send('<h1>Custom Header set</h1>')
// })

// app.listen(3000, () => console.log('Server running on http://localhost:3000'));

//Sending Files
// const express = require('express');
// const app = express();
// const path = require('path');
// const fs = require('fs');
// app.get('/download', (req, res) => {
//     const filePath = path.join(__dirname, 'example.pdf');
//     res.download(filePath); // Sends the file as an attachment
// })
// app.get('/stream', (req, res) => {
//     const filePath = path.join(__dirname, 'largefile.mp4');
//     res.writeHead(200, { 'Content-Type': 'video/mp4' });
//     const fileStream = fs.createReadStream(filePath);
//     fileStream.pipe(res); // Streams file to the client
//   });
// app.listen(3000, () => console.log('Server running on http://localhost:3000'));