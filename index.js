const http = require('http');
const os = require('os');

console.log('starting..');

let handler = function(req, res) {
    console.log('received request from ' + req.connection.remoteAddress);
    res.writeHead(200);
    res.end('You\'ve hit ' + os.hostname() + '\n');
};

let www = http.createServer(handler);
www.listen(8080);

