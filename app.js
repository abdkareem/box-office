// load external module
var express = require('express');

// load internal module
var path = require('path');

// load index.js so that it's export is contained in export of this file
var router = require('./routes/index.js')

var app = express();

// fixing: No default engine was specified and no extension was provided.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// make app use route (the export of index.js) inorder to handle routes
app.use('/', router);

// export app
module.exports = app;