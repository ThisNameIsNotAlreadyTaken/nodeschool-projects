 var concat = require('concat-stream');
 var http = require('http');

 process.stdin.pipe(concat(function(body){
    process.stdout.write(body.toString().split('').reverse().join(''));
 }));