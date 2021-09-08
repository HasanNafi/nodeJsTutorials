const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {

    if (req.url == "/") {
        //Asynchronous file write
        // fs.writeFile('demo.txt', 'Hello world', function(error) {

        //     if (error) {
        //         res.writeHead(200, { 'content-Type': 'text/html' });
        //         res.write("File Write failed");
        //         res.end();

        //     } else {
        //         res.writeHead(200, { 'content-Type': 'text/html' });
        //         res.write("File Write success");
        //         res.end();

        //     }

        // });

        //synchronous file write
        let error = fs.writeFileSync('synchronous.txt', 'welcome to synchronous write file')

        if (error) {
            res.writeHead(200, { 'content-Type': 'text/html' });
            res.write("File Write failed");
            res.end();

        } else {
            res.writeHead(200, { 'content-Type': 'text/html' });
            res.write("File Write success");
            res.end();

        }

    }

});

server.listen(5000);
console.log("server run success");