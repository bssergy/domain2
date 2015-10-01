var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true }));
}).listen(3005, function() {
    console.log('Server is listening on port 3005');
});