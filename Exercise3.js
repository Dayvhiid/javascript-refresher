const fs = require('fs');
const path = require('path');
const http = require('http');
const os = require('os');
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        $url = req.url;
         fs.writeFile('log.txt',$url,(err,data) => {
              if(err) throw err;
         });
         res.writeHead(200,{'Content-type':'text/plain'});
         res.end(os.platform());        
    } else {
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end("Page Not Found");
    }
})

PORT = 4000;
server.listen(PORT, ()=>{
    console.log(`The server is running on host:${PORT}`)
})