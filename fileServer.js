const fs = require('fs');
const path = require('path');
const http = require('http');
const server = http.createServer((req,res) => {
    if (req.url === '/') {
        const filepath = path.join(__dirname, 'index.html');
        fs.readFile(filepath, (err,content) => {
            if(err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error loading file');
                return;
            }
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);
        })
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }
})

const PORT = 4000;
server.listen(PORT, () => {
   console.log(`Server running on: ${PORT}`); 
});