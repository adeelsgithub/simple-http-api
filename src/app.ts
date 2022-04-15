let http = require("http");

let server = http.createServer((req:any,res:any) => {
    console.log(req.url, req.method);
});

server.listen(5000, ()=>{
    console.log("server running at port 5000...")
});