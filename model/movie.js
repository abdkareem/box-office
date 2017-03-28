// load external  module
var mongoose = require('mongoose')

// create schema
var movieSchema = mongoose.Schema({
    name: String,
    year: Number,
    director: String,
    music: String,
    cast: []
})

// use above Schema to create a model 
var allmovie = mongoose.model('allmovie', movieSchema)

// export movies model
module.exports = allmovie