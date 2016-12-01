/*var mymodule = require('./mymodule.js');

var files = mymodule(process.argv[2], process.argv[3], function(err, data) {
    if (err) {
        console.log(err);
    } else {
        data.forEach(function(item) { console.log(item); });
    }
});*/

var http = require('http');
var urls = process.argv.slice(2);

function getAndPrint(index) {
    http.get(urls[index], function (response) {
        var str = "";
        response.on('data', function (data) {
            str += data.toString();
        });
        response.on('end', function () {
            console.log(str);
            if (urls[index + 1]) {
                getAndPrint(index + 1);
            }
        })
    });
}

getAndPrint(0);

/*http.get(process.argv[2], function (response) {
    var length = 0;
    var str = "";
    response.on('data', function (data) {   
        var strData =  data.toString();  
        length += strData.length;
        str += strData;
    });
    response.on('end', function(){
        console.log(length);
        console.log(str);
    })
});*/