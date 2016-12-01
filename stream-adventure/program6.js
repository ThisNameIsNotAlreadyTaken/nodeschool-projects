var http = require('http');
var fs = require('fs');
var through2 = require('through2');

function write(buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
}

function end(done) { done(); }

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through2(write, end)).pipe(res);
    } else {
        res.end();
    }
});

server.listen(process.argv[2]);