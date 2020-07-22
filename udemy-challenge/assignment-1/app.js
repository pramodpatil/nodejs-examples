const htpp = require('http');

//import route object
const route = require('./route');

const server = http.createServer(route.routeHandler);

server.listen(3000);