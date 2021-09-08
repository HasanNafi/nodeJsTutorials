const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {

    if (req.url == "/") {

        fs.writeFile('demo.txt', 'Hello world', function(error) {

            if (error) {
                res.writeHead(200, { 'content-Type': 'text/html' });
                res.write("File Write failed");
                res.end();

            } else {
                res.writeHead(200, { 'content-Type': 'text/html' });
                res.write("File Write success");
                res.end();

            }

        });

    }

});

server.listen(4000);
console.log("server run success");