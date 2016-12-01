var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
    var urlparsed = url.parse(request.url, true);
    var date = new Date(urlparsed.query.iso);

    response.writeHead(200, { 'Content-Type': 'application/json' });

    if (urlparsed.pathname === '/api/parsetime') {
        response.write(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }));
    } 

    if (urlparsed.pathname === '/api/unixtime') {
        response.write(JSON.stringify({
            unixtime: date.valueOf()
        }));
    }

    response.end();
});

server.listen(process.argv[2]);