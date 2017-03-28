// load external modules
var express = require('express');
var mongoose = require('mongoose');

// for db connection and movie model, load db.js and movie.js
var db = require('../model/db.js');
var movie = require('../model/movie.js');

var router = express.Router();

// handle urls
router.get('/', function(request, response) {
    response.send('Welcome, you are at root');
})

router.get('/allmovies', function(request, response) {
    console.log("Entered in get")
    /* var Arrival = new movie({
        name: "Arrival",
        year: 2016,
        director: 'Denis Villeneuve',
        music: 'Johann Johannsson',
        cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker']
    }); */
    //mongoose.Promise = global.Promise;
    movie.find(function(err, data) {
        console.log("Entered in find call back")
        if (err) {
            console.log('error occured while saving!', err)
            response.send(err)
        }
        response.send(data)
    })
    /*Arrival.save(function(err, data) {
        if (err) {
            console.log('error occured while saving!', err)
            response.send(err)
        }
        console.log('Successfully Saved!', data)
    }) */
})

// export router so that it can be used by app. Note: app inturn is used by server
module.exports = router;