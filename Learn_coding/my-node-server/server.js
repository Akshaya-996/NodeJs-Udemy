//Basic Node.js Server
// const http = require ('http');

// //Create a server
// const server = http.createServer((req, res) => {
//     res.statusCode = 200; //HTTP status code
//     res.setHeader('Content-type','text/plain');
//     res.end('Hello World!\n');
// })

// //Listen on Port 3000
// const PORT = 3000;
// server.listen(PORT, () => {
// console.log(`Server running at http://localhost:${PORT}/`);
// });

//Node.js Server with Express
const express = require("express");
const app = express();
const PORT = 3000;

//Define a route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
    res.send("About Page")
});

app.get('/contact', (req, res)=> {
    res.send("Contact Page")
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello, API!' });
  });

//Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
