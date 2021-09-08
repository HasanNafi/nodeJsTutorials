const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {

    if (req.url == "/") {
        //Asynchronous file Rename
        // fs.rename('demo.txt', 'Asynchronous.txt', function(error) {

        //     if (error) {
        //         res.writeHead(200, { 'content-Type': 'text/html' });
        //         res.write("File Rename failed");
        //         res.end();

        //     } else {
        //         res.writeHead(200, { 'content-Type': 'text/html' });
        //         res.write("File Rename success");
        //         res.end();

        //     }

        // });

        // synchronous file rename
        let error = fs.renameSync('synchronous.txt', 'synchronousRename.txt')

        if (error) {
            res.writeHead(200, { 'content-Type': 'text/html' });
            res.write("File Rename failed");
            res.end();

        } else {
            res.writeHead(200, { 'content-Type': 'text/html' });
            res.write("File Rename success");
            res.end();

        }

    }

});

server.listen(5000);
console.log("server run success");