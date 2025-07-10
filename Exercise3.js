const fs = require('fs');
const path = require('path');
const http = require('http');
const os = require('os');
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        const url = req.url;
         fs.appendFile('log.txt',`\n${url}`, err => {
             if (err) throw err;
         })
         res.writeHead(200,{'Content-type':'text/plain'});
         res.end(os.platform());        
    }
     else {
         const url = req.url;
           fs.appendFile('log.txt',`\n${url}`, err => {
             if (err) throw err;
         })
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end("Page Not Found");
    }
})

PORT = 4000;
server.listen(PORT, ()=>{
    console.log(`The server is running on host:${PORT}`)
})