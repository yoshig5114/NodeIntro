const http = require('http');
const PORT = 5000;

http.createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/html"});
    response.write("Hello Web!");
    response.end();
}).listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}...`);
});