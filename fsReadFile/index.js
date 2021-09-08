const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {

    if (req.url = "/") {
        fs.readFile('home.html', function(err, data) {

            res.writeHead(200, { 'content-Type': 'text/html' });
            res.write(data);
            res.end();

        })

    }


})

server.listen(3000);
console.log("server run success");