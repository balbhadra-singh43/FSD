import http from 'http';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("<h1> Home Page</h1>");
    } else if (req.url === '/about') {
        res.end("<h1> About Page</h1>");
    } else if(req.url === '/products') {
        res.end(`<h1>mobile phones</h1>
            <h2>laptops</h2>)
            <p>discount</p>
            <a href="/">Home</a>
        `);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1> Page not found</h1>");
    }
});

server.listen(4000, () => {
    console.log("Server is running");
});