const fs = require('fs');
const http = require('http');
const path = require('path');
const server = http.createServer((req,res) => {
    if(req.url === '/'){
         res.writeHead(200,{'Content-type':'text/plain'});
         res.end("Welcome to my node server")
    }else if(req.url === '/home'){
        const filePath = path.join(__dirname, 'home.html');
        fs.readFile(filePath, (err,content) => {
            if(err){
                res.writeHead(500,{'Content-type':'text/plain'});
                res.end("Error Loading The Page");
            } else {
                res.writeHead(200,{'Content-type':'text/html'});
                res.end(content);
            }
        })
    }else {
        res.writeHead(404, {'Content-type':'text/plain'});
        res.end("Page Not Found")
    }
});

PORT = 4000
server.listen(PORT, () => {
    console.log(`Currently running on localhost port:${PORT}`);
});