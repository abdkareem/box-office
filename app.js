// load external module
var express = require('express');

// load index.js so that it's export is contained in export of this file
var router = require('./routes/index.js')

var app = express();

// make app use route (the export of index.js) inorder to handle routes
app.use('/', router);

// export app
module.exports = app;