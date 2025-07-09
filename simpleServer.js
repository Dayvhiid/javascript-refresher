// This code creates a simple HTTP server using Node.js that listens on port 3000.
const http = require('http');
const server = http.createServer((req,res) => {
    console.log(req.method,req.url);
    res.setHeader('Content-type','text/plain');
    res.end("Server Ended");
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Sever running on: ${PORT}`)
})