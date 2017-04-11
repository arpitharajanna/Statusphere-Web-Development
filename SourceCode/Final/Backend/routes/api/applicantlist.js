// Application to get list of applicants from database and send it to front end
// All actions will happen in /models


var express = require('express');
var router = express.Router();
console.log('Inside list of Applicants');

var Applicant = require('../../models/applicant');

/*
var Applicant = require('./Backend/models/applicant');
// Adding an applicant
router.post('/api/applicant', function(req, res) {
	var applicant = req.body;
	Applicant.addApplicant(applicant, function(err, applicant) {
		if(err){
			throw err;
		}
		res.json(applicant);
	}, "lala land");
});

*/


///////////////////////////////////////////////////////

// Getting list of all applicants
router.get('/', function(req, res) {
	console.log("inside");
	Applicant.getApplicants(function(err, applicants) {
		if(err){
			throw err;
		}
		res.json(applicants);
	});
});


// Adding an applicant
router.post('/', function(req, res) {
	var applicant = req.body;
	Applicant.addApplicant(applicant, function(err, applicant) {
		if(err){
			throw err;
		}
		res.json(applicant);
	}, "lala land");
});


// Getting a single Applicant by username
router.get('/:_username', function(req, res) {
	Applicant.getApplicantByName(req.params._username, function(err, applicant) {
		if(err){
			throw err;
		}
		res.json(applicant);
	});
});



// Removing a single Applicant by username
router.delete('/:_user', function(req, res) {
	Applicant.deleteApplicantByName(req.params._user, function(err, applicant) {
		if(err){
			throw err;
		}
		res.json(applicant);
	});
});


// Updating a single Applicants firstname and lastname by filtering with username
router.put('/:_username', function(req, res) {
	var username = req.params._username;
	var applicant = req.body;
	Applicant.updateApplicant(username, applicant, {}, function(err, applicant) {
		if(err){
			throw err;
		}
		res.json(applicant);
	}, "lala land");
});

///////////////////////////////////////////////////////

module.exports = router;