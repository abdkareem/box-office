// load external modules
var mongoose = require('mongoose')

// connect to BoxOffice db
var db = mongoose.connect('mongodb://localhost:27017/BoxOffice')

module.exports = db;


