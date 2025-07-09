const fs =  require('fs');
const path = require('path');
const http = require('http')
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        const filePath = path.join(__dirname,'index.html');
        fs.readFile(filePath,(err,content) => {
            if(err){
                res.writeHead(500, {'Content-type': 'text/plain'});
                res.end("Error Loading File");
                return;
            } else {
                res.writeHead(200,{'Content-type': 'text/html'})
                res.end(content);
            }
        })
    } else {
        res.writeHead(400, {'Content-type':'text/plain'});
        res.end("Page Not Found");
    }
})

PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`);
});
