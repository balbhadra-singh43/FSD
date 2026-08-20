import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(404,
         { 'Content-Type': 'text/html' });
    res.end("<h2> welcome to server");
});
server.listen(4000, () => {
    console.log("Server is running");
});