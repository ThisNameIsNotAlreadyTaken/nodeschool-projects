var through2 = require('through2');
var split = require('split');

var lineno = 1;

process.stdin.pipe(split()).pipe(through2(function(line, _, next){
    var converted = (lineno % 2 === 1) ? line.toString().toLowerCase() : line.toString().toUpperCase();
    lineno++;
    console.log(converted);
    next();
}));