const http = require("http");
const app = require("./backend/app");

// make server listen to a port number 
const PORT = process.env.PORT || 3000
// set port for the app
app.set('port', PORT);
// create server and store it
const server = http.createServer(app);
// listen to a port
server.listen(PORT)
