/**
 * Created by Banzai on 18/06/15.
 */
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hellow World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at htto://127.0.0.1:1337/');