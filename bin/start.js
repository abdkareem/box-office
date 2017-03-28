// file description: start.js contains starting point of the app. i.e. creation of Server and binding on it on port

// load node internal libraries
var http = require('http');

// load modules within the project
var app = require('../app.js');
//var router = require('./routes/index.js')

// create server 
var server = http.createServer(app);

// bind server to port
server.listen(3000, function() {
    console.log("Listening on port 3000")
});