const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req, res) {

    if (req.url == "/") {
        // Asynchronous file exist
        fs.exists('Asynchronous.txt', function(result) {

            if (result) {

                res.end("Asynchronous File found");

            } else {

                res.end("Asynchronous File not found");

            }

        });

        //synchronous file exist
        // let result = fs.existsSync('synchronousRename.txt')

        // if (result) {

        //     res.end("synchronous File found");

        // } else {
        //     res.end("Synchronous File not found");

        // }

    }

});

server.listen(5000);
console.log("server run success");