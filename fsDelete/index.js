const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {

    if (req.url == "/") {
        // Asynchronous file delete
        fs.unlink('Asynchronous.txt', function(error) {

            if (error) {
                res.writeHead(200, { 'content-Type': 'text/html' });
                res.write("Asynchronous File delete failed");
                res.end();

            } else {
                res.writeHead(200, { 'content-Type': 'text/html' });
                res.write("Asynchronous File Delete success");
                res.end();

            }

        });

        //synchronous file delete
        let error = fs.unlinkSync('synchronousRename.txt')

        if (error) {
            res.writeHead(200, { 'content-Type': 'text/html' });
            res.write("synchronous File Delete failed");
            res.end();

        } else {
            res.writeHead(200, { 'content-Type': 'text/html' });
            res.write("Synchronous File Delete success");
            res.end();

        }

    }

});

server.listen(5000);
console.log("server run success");