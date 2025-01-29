const http = require("http"); //import files or core modules
//req- data about the request res- Send you response
// function rqListener (req, res) {

// }
const routes = require('./routes');
console.log(routes.someText);
// const server = http.createServer(routes);
const server = http.createServer(routes.handler);
server.listen(3000);
