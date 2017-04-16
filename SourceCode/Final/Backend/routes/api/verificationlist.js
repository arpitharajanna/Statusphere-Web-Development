// Application to get list of verification codes from database and send it to front end
// All actions will happen in /models

var express = require('express');
var router = express.Router();
console.log('Inside list of Verification Codes');

var code = 10; // Code received from front end
var tempcode; // temporary code variable
var flag; // Flag to send to front end

var Verification = require('../../models/verification');

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
	console.log("Inside get all verification codes");
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
	tempcode = Math.floor(Math.random()*1000000);
	verification.randomcode = parseInt(tempcode);
	Verification.addVerification(verification, function(err, verification) {
		if(err){
			throw err;
		}
		res.json(verification);
		SendMail(verification);
	});
});


// Getting a single verification by emailID
router.get('/:emailid', function(req, res) {
	Verification.getVerificationByEmail(req.params.emailid, function(err, verification) {
		if(err){
			throw err;
		}
		res.json(verification);
		if(code == verification.randomcode){
			flag = true;
		}
		else{
			flag = false;
		}
		console.log(flag);
		Verification.deleteVerificationByEmail(req.params.emailid, function(err, verification){
			if(err){
				throw err;
			}
			res.json(verification);
		});
	});
});

///////////////////////////////////////////////////////

module.exports = router;