/*// test variables
var object2 = {
	"_id" : ObjectId("58d9bf62d88558d09ce7630e"),
	"name" : "Assassin's Creed",
	"year" : 2016,
	"director" : "Justin Kurzel",
	"music" : "Jed Kurzel",
	"cast" : [
		"Michael Fassbender",
		"Marion Cotillard",
		"Jeremy Irons"
	]
}
*/

// load external modules
var express = require('express');
var mongoose = require('mongoose');

// for db connection and movie model, load db.js and movie.js
var db = require('../model/db.js');
var allmovie = require('../model/movie.js');

var router = express.Router();

// handle urls
router.get('/', function(request, response) {
    response.send('Welcome, you are at root');
})

router.get('/allmovies', function(request, response) {
    console.log("Entered in get")
    /*
    var lightboceans = new allmovie({	
            "name" : "The Light Between Oceans",
            "year" : 2016,
            "director" : "Derek Cianfrance",
            "music" : "Alexandre Desplat",
            "cast" : ["Michael Fassbender", "Alicia Vikander", "Rachel Weisz"]
        });
    mongoose.Promise = global.Promise;
    lightboceans.save(function(err, data) {
        if (err) {
            console.log('error occured while saving!', err)
            response.send(err)
        }
        //console.log('Successfully Saved!', data)
    }) 
    */
    allmovie.find(function(err, data) {
        console.log("Entered in find call back")
        if (err) {
            console.log('error occured while saving!', err)
            response.send(err)
        }
        response.send(data)
    })
})

// export router so that it can be used by app. Note: app inturn is used by server
module.exports = router;