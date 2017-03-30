var mongoose = require('mongoose');

var influencerSchema = new mongoose.Schema({
influencer_username:{
	type:String,
	unique :true,
	required : true
},
influencer_password:{
	type: String,
	required:true
},
applicant_id:{
	type: Number;
	unique: true,
	required: true
},
firstName:{
    type: String,
    required: true
},
lastname:{
	type: String,
	required: true
},
birthday:{
	type: Number,
	required: true
},
gender:{
	type: String,
	required: true
},
followers:{
	type: Number,
	required: true
},
address:{
	type: String,
	required: true
},
emaild:{
	type: String,
	unique: true,
	required: true
},
image_url:{
	type: String,
	required: true
},
instagram_url:{
	type: String,
	unique: true,
	required: true
},
twitter_url:{
	type: String,
	unique: true,
	required: true
},
facebook_Url:{
	type:String,
	unique: true,
	required:
},
categories:{
	type: String;
	required: true
},
date_accepted:{
	type: Date;
	required: true
},
gamification_points:{
	type: Number,
	required: true
}
});

module.exports = mongoose.model('influencer', influencerSchema);
