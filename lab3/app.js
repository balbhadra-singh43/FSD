import http from 'http';

const server = http.createServer();
server.on('request', (req, res) => {
    res.write("Welcome to Server Side Programming");
    res.write("<h2>Nodemon is tracking the files</h2>");
    res.end();
})

server.listen(3000, () => {
    console.log("Server is running");
});