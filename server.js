var http = require('http');
var app = require('express')();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method == 'OPTIONS') {
        return res.status(200).end();
    }
});

app.post('/', function(req, res, next) {
    res.send({ success: true });
})

http.createServer(app).listen(3005, function() {
    console.log('Server is listening on port 3005');
});