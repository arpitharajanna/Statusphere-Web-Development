var passport= require('passport')
var mongoose = require('mongoose')
var applicant = require('../models/applicant');
const username = require('username');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
 };


module.exports.register = function(req,res){

// var applicant = new applicant({
var Applicant = new applicant();
console.log("hellohdus");
Applicant.email = req.body.email;
Applicant.username = req.body.username;
Applicant.password = req.body.password;

 Applicant.save(function(err){
 	        if(err){
 	        	res.status(404).json({"message":"username already exists"});
 	        }
 	        else{
		    console.log(req.body.firstName);
			var token;
			token = Applicant.generateJwt();
			res.status(200);
			res.json({
				"message":"Registration is successful"
			});}
		});
  }


module.exports.login = function(req,res){

	passport.authenticate('local',function(err,applicant,info){
	var token;
	if(err){
		return res.status(404).json(err);

		
	}
	if (applicant){

		//token=applicant.generateJwt();
		res.status(200);// 

	   if (applicant.firstName==null){
       	res.json({
			message:"details are not complete",
			username:applicant.username,
			flag:1
		});

       }
     else{
	   res.json({
			message:"details are complete",
			username:applicant.username,
			flag:2
		});}
        // username().then(username => {
        // console.log(username);
    //=> 'sindresorhus' 
	
	}
	else{
		 res.status(401);
		 res.json(info);
		
	}

})(req,res);
};
