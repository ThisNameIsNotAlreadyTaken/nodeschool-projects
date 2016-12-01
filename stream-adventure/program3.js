var fs = require('fs');
var through2 = require('through2');

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function end(done) {
    done();
}

var stream = through2(write, end);

process.stdin.pipe(stream).pipe(process.stdout);