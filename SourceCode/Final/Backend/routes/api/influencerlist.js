// Application to get list of influencers from database and send it to front end
// All actions will happen in /models


var express = require('express');
var router = express.Router();
console.log('Inside list of Influencers');

var Influencer = require('../../models/influencer');

///////////////////////////////////////////////////////

// Getting list of all influencers
router.get('/', function(req, res) {
	console.log("Inside get all influencers");
	Influencer.getInfluencers(function(err, influencers) {
		if(err){
			throw err;
		}
		res.json(influencers);
	});
});


// Adding an influencer
router.post('/', function(req, res) {
	var influencer = req.body;
	Influencer.addInfluencer(influencer, function(err, influencer) {
		if(err){
			var msg = 'Did not add to influencer to db. Possible duplicate/invalid schema';
			res.status(404).send({ error: msg});
			console.log(msg);
			//throw err;
		}
		res.json(influencer);
	}, "lala land");
});


// Getting a single Influencer by username
router.get('/:_username', function(req, res) {
	Influencer.getInfluencerByName(req.params._username, function(err, influencer) {
		if(err){
			throw err;
		}
		res.json(influencer);
	});
});

// Getting a single Influencer by emailid
router.get('/reset/:_emailid', function(req, res) {
	Influencer.getInfluencerByEmail(req.params._emailid, function(err, influencer) {
		if(err){
			throw err;
		}
		res.json(influencer);
	});
});


// Removing a single Influencer by username
router.delete('/:_user', function(req, res) {
	Influencer.deleteInfluencerByName(req.params._user, function(err, influencer) {
		if(err){
			throw err;
		}
		res.json(influencer);
	});
});


// Updating a single Influencers firstname and lastname by filtering with username
router.put('/:_username', function(req, res) {
	var username = req.params._username;
	var influencer = req.body;
	Influencer.updateInfluencer(username, influencer, {}, function(err, influencer) {
		if(err){
			throw err;
		}
		res.json(influencer);
	}, "lala land");
});

// Updating a single Influencers password by filtering with emailid
router.put('/reset/:_emailid', function(req, res) { //
	var emailid = req.params._emailid;
	var influencer = req.body;
	Influencer.updatePassword(emailid, influencer, {}, function(err, influencer) {
		if(err){
			throw err;
		}
		influencer.passreset = true;
		res.json(influencer);
	});
});

///////////////////////////////////////////////////////

module.exports = router;