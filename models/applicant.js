var mongoose = require('mongoose');

var applicantSchema = new mongoose.Schema({
applicant_username{
	type:String,
	unique :true,
	required : true
},
applicant_password{
	type: String,
	required:true
},
firstName{
    type: String,
    required: true
},
lastname{
	type: String,
	required: true
},
birthday{
	type: Number,
	required: true
},
gender{
	type: String,
	required: true
},
followers{
	type: Number,
	required: true
},
emaild{
	type: String,
	unique: true,
	required: true
},
image_url{
	type: String,
	required: true
},
instagram_url{
	type: String,
	unique: true,
	required: true
},
twitter_url{
	type: String,
	unique: true,
	required: true
},
facebook_Url{
	type:String,
	unique: true,
 
},
categories{
	type: String;
	required: true
},
date_applied{
	type: Date;
	required: true
}
});

module.exports = mongoose.model('applicant', applicantSchema);
