// Localserver dan routing dengan node (no realtime)

const http = require("http");
const host = "localhost";
const port = 8000;

const requestListener = (req, res) => {

    if (req.url === '/') {
        res.end("Hello Vinnn! welcome to GDSC 2023....");
    } else if (req.url === '/about') {
        res.end("This is page About!!!")
    } else if (req.url === '/feed/trending') {
        res.end("This is the Trending Page!!!")
    } 
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


// Menggunakan/install Nodemon (realtime tanpa restart serve)

// Using hapi.js frameworks
