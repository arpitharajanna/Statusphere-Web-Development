var crypto = require('crypto');
var jwt = require('jsonwebtoken');
//var bcrypt = require('bcrypt');




var mongoose = require('mongoose');

var applicantSchema = new mongoose.Schema({
username: {
	type:String,
	unique:true,
	required: true
},
password: {
	type: String,
	required:true
},
firstName: {
    type: String,
    required: true
},
lastname: {
	type: String,
	required: true
},
birthday: {
	type: Number,
	required: true
},
gender: {
	type: String,
	required: true
},
followers: {
	type: Number,
	required: true
},
email: {
	type: String,
	unique: true,
	required: true
},
image_url: {
	type: String,
	required: true
},
instagram_url: {
	type: String,
	unique: true,
	required: true
},
twitter_url: {
	type: String,
	unique: true,
	required: true
},
facebook_url: {
	type: String,
	unique: true, 
},
categories: {
	type: String,
	required: true
},
date_applied: {
	type: Date,
	required: true
},
hash: String,
salt: String

});


// applicantSchema.methods.setPassword = function(password){
//   this.salt = crypto.randomBytes(16).toString('hex');
//   console.log(this.salt);
//   this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
// };

// applicantSchema.methods.validPassword = function(password) {
//    console.log(this.salt);
//   this.salt = crypto.randomBytes(16).toString('hex');
//    console.log("difference");
//    console.log(this.salt);
//   var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
//   return this.hash === hash;
// };

applicantSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};


applicantSchema.methods.generateJwt= function(){
var expiry= new Date();
expiry.setDate(expiry.getDate()+7);

return jwt.sign({
_id : this._id,
username: this.username,
firstName: this.firstName,
exp: parseInt(expiry.getTime()/1000),
}, "MY_SECRET");
}
module.exports = mongoose.model('applicant', applicantSchema);
