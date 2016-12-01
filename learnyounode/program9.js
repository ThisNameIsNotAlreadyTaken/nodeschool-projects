var net = require('net');

console.log(process.argv[2]);

function getCurrentDateAsStr() {
    var date = new Date();
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + 
    (date.getDate() < 10 ? '0' : '') + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
}

var server = net.createServer(function(socket) {
    console.log('here we are');
    socket.end(getCurrentDateAsStr() + '\n');
});

server.listen(process.argv[2]);

server.on('error', function(){
    console.log('error');
});