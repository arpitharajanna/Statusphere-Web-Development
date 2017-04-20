// Application to get list of applicants from database and send it to front end
// All actions will happen in /models


var express = require('express');
var router = express.Router();
console.log('Inside list of Applicants');

var Applicant = require('../../models/applicant');
var Influencer = require('../../models/influencer');

///////////////////////////////////////////////////////
// Code for sending email to applicant that they have 
// been accepted
// Move to separate js file

'use strict';
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'random12394123@gmail.com',
        pass: '123456789094'
    }
});

let mailOptions = {};

// Put following code under an if statement which checks the due date of a package 
function SendMail(object){

	console.log("Reached sendMail");

	    mailOptions = {
	    from: '"Statusphere Team" <random12394123@gmail.com>', // sender address
	    to: object.email, // list of receivers
	    subject: "Welcome to Statusphere",
	    text: " Hello! We are glad to welcome you to the Statusphere team",
	    html: object.message
	};

	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message %s sent: %s', info.messageId, info.response);
	});
}


///////////////////////////////////////////////////////

///////////////////////////////////////////////////////

// Getting list of all applicants
router.get('/', function(req, res) {
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
			// Sending an error back if duplicate encountered or some invalid scheme is seen.
			// throw err;
			var msg = 'Did not add to applicant to db. Possible duplicate/invalid schema';
			res.status(404).send({ error: msg});
			console.log(msg);
		}
		res.json(applicant);
	});
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
	});
});


// Moving a particular applicant to influencer table based on the username
router.get('/addtoinfluencer/:_username', function(req, res) {
	Applicant.getApplicantByName(req.params._username, function(err, applicant) {
		if(err){
			throw err;
		}
		res.json(applicant);
		Influencer.addApplicantToInfluencer(applicant, function(err, res) {
			if(err){
				throw err;
			}
			else{
				SendMail(applicant);
				console.log("Added applicant: " + req.params._username + " to Influencer DB");
				// Delete Applicant
				Applicant.deleteApplicantByName(req.params._username, function(err, res) {
					if (err){
						var msg = 'Not able to delete applicant:' + req.params._username +' to db.';
						res.status(404).send({ error: msg});
						console.log(msg);
					}
					else
					{
						console.log("Deleted " + req.params._username + "from Applicant DB");
					}
				})
			}

		})

	});
});

///////////////////////////////////////////////////////

module.exports = router;
