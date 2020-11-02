const http = require("http");
// create server and store it
const server = http.createServer((req, res) => {
    // end the response
    res.end("this is my first response");
});
// make server listen to a port number 
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`App runs in a PORT ${PORT}`);
});    