let http = require("http");

let server = http.createServer((req,res) => {
    console.log(req);
});

server.listen(5000, ()=>{
    console.log("server running at port 5000...")
});