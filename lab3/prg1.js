import http from 'http';
const server = http.createServer((req, res) => {
    console.log("Welcome to nodejs");
    console.log("request url");
    console.log(req.url);
    res.end("hello");
    console.log("request method");
    console.log(req.method);
    console.log("request headers");
    console.log(req.headers);
    console.log("request socket");
    console.log(req.socket);
});
const PORT = 3000;

server.listen(PORT, () => 
    console.log("Server is running...." )
);
