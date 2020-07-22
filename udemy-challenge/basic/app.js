const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes.routeHandler);
5
server.listen(3000);
