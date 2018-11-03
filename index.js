const http = require('http');
const os = require('os');

console.log('starting..');

let handler = function(req, res) {
    console.log('received request from ' + req.connection.remoteAddress);
    response.writeHead(200);
    response.end('You\'ve hit ' + os.hostname() + '\n');
};

let www = http.createServer(http);
www.listen(8080);

