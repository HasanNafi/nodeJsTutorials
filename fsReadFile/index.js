const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {
    //asynchronous read
    // if (req.url = "/") {
    //     fs.readFile('home.html', function(err, data) {

    //         res.writeHead(200, { 'content-Type': 'text/html' });
    //         res.write(data);
    //         res.end();

    //     })


    //synchronous read
    if (req.url = "/") {
        let mydata = fs.readFileSync('home.html');
        res.writeHead(200, { 'content-Type': 'text/html' });
        res.write(mydata);
        res.end();

    }


});

server.listen(3000);
console.log("server run success");