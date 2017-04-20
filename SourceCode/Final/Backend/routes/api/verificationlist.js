// Application to get list of verification codes from database and send it to front end
// All actions will happen in /models

var express = require('express');
var router = express.Router();
console.log('Inside list of Verification Codes');

var code = 10; // Code received from front end
var tempcode; // temporary code variable
var flag; // Flag to send to front end

var Verification = require('../../models/verification');
var Influencer = require('../../models/influencer');

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

function SendMail(object){
	    mailOptions = {
	    from: '"Statusphere Team" <random12394123@gmail.com>', // sender address
	    to: object.emailid, // list of receivers
	    subject: 'Here is your verification code.',
	    text: 'Your action is due!',
	    html: object.randomcode
	};

	transporter.sendMail(mailOptions, (error, info) => {
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message %s sent: %s', info.messageId, info.response);
	});
}

///////////////////////////////////////////////////////

// Getting list of all verification codes
router.get('/', function(req, res) {
	console.log("Get all verification codes");
	Verification.getVerification(function(err, verification) {
		if(err){
			throw err;
		}
		res.json(verification);
	});
});


// Adding a verification code
router.post('/', function(req, res) {
	var verification = req.body;
	Influencer.getInfluencerByEmail(verification.emailid, function(err, influencer) {	// Check if emailID exists in Influencer table
		if(err){
			throw err;
		}
		if(influencer != null){			// If exists, set flag to true, generate random code and send object to front end
			verification.bool = true;
			tempcode = Math.floor(Math.random()*1000000);
			verification.randomcode = parseInt(tempcode);
			Verification.addVerification(verification, function(err, verification) {
				if(err){
					throw err;
				}
				res.json(verification);
				SendMail(verification);
			});
		}
		else{							// If it doesn't set flag to false and send object to front end
			verification.bool = false;
			res.json(verification);
		}
	});
});


// Getting a single verification by emailID
router.post('/code/:_emailid', function(req, res) {
	var newverification = req.body;
	Verification.getVerificationByEmail(req.params._emailid, function(err, verification) {
		if(err){
			throw err;
		}
		if(newverification.randomcode == null || newverification.randomcode != verification.randomcode){
			newverification.match = false;
		}
		else{
			newverification.match = true;
		}
		res.json(newverification);
		Verification.deleteVerificationByEmail(req.params._emailid, function(err, verification){
			if(err){
				throw err;
			}
		});
	});
});

///////////////////////////////////////////////////////

module.exports = router;