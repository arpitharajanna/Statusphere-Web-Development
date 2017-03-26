var passport= require('passport')
var mongoose = require('mongoose')
var applicant = require('../models/applicant');

module.exports.register = function(req,res){

// var applicant = new applicant({
var Applicant = new applicant();
console.log(req.body.username);
Applicant.firstName = req.body.firstName;
Applicant.username = req.body.username;
Applicant.password = req.body.password;

//Applicant.setPassword(req.body.password.toString());
Applicant.save(function(err){
    console.log(req.body.firstName);
	var token;
	token = Applicant.generateJwt();
	res.status(200);
	res.json({
		"token":token
	});
});
}



module.exports.login = function(req,res){

	passport.authenticate('local',function(err,applicant,info){
	var token;
	if(err){
		res.status(404).json(err);
		return;
	}
	if (applicant){
		token=applicant.generateJwt();
		res.status(200);
		res.json({
			"token":token
		});
	
	}
	else{
		res.status(401).json(info);
	}

})(req,res);
};
