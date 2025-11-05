
const http = require("http");

const server = http.createServer((req,res) =>{
    res.writeHead(0,{"Context-Type": "text/plain"});
    res.end("A Very Good Morning Gopi\n");
});

server.listen(3000,() => {
    console.log("Server running at http://localhost:3000/");
});
