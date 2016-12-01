var trumpet = require('trumpet');
var through2 = require('through2');

function write(buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
}

function end(done) { done(); }

var tr = trumpet();

var loud = tr.select('.loud').createStream();
loud.pipe(through2(write, end)).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
