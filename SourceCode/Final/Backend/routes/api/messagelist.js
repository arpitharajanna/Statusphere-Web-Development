// Application to get list of messages from database and send it to front end
// All actions will happen in /models

var express = require('express');
var router = express.Router();
console.log('Inside list of Messages');

var Message = require('../../models/message');

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
	    subject: object.subject,
	    text: 'Your action is due!',
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

// Getting list of all messages
router.get('/', function(req, res) {
	console.log("Inside get all messages");
	Message.getMessage(function(err, message) {
		if(err){
			throw err;
		}
		res.json(message);
	});
});


// Adding a message
router.post('/', function(req, res) {
	var message = req.body;
	Message.addMessage(message, function(err, message) {
		if(err){
			//throw err;
			// Instead of throwing error , sending the error message
			res.status(404).send({error: err}); 
		}
		res.json(message);
		// Sending the status code on success
		res.status(200).send(); 
		SendMail(message);
	});
});


// Getting a single message by username
router.get('/:_username', function(req, res) {
	Message.getMessageByName(req.params._username, function(err, message) {
		if(err){
			throw err;
		}
		res.json(message);
	});
});

///////////////////////////////////////////////////////

module.exports = router;