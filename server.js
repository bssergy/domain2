var http = require('http');
var app = require('express')();

app.use('Access-Control-Allow-Origin', '*');

app.post('/', function(req, res, next) {
    res.send({ success: true });
})

http.createServer(app).listen(3005, function() {
    console.log('Server is listening on port 3005');
});