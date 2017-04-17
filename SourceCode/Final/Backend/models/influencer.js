var mongoose = require('mongoose');

var passreset = false; // To determine whether password is to be reset

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
		type: Number,
		required: true
	},
	firstname:{
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
	emailid:{
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
		required: true
	},
	twitter_url:{
		type: String,
		required: true
	},
	facebook_url:{
		type:String,
		required: true
	},
	categories:{
		type: [String],
		required: true
	},
	date_accepted:{
		type: Date,
		default: Date.now
	},
	gamification_points:{
		type: Number,
		required: true
	}
});

var Influencer = module.exports = mongoose.model('influencer', influencerSchema);


// Function to add influencers
// Have to handle schema enforcement
module.exports.addInfluencer = function(influencer, callback, random){
	console.log(random);
	Influencer.create(influencer, callback);
}

// Function to get list of all Influencers
module.exports.getInfluencers = function(callback, limit){
	Influencer.find(callback).limit(limit);
}

// Function to get influencer detail by username alone.
module.exports.getInfluencerByName = function(username, callback){
	Influencer.findOne({'influencer_username':username}, callback);
}

// Function to get influencer detail by email alone.
module.exports.getInfluencerByEmail = function(emailid, callback){
	Influencer.findOne({'emailid':emailid}, callback);
}

// Function to delete a particular influencer by username
module.exports.deleteInfluencerByName = function(user, callback){
	console.log('going to delete ' + user +'!!!! ');
	var query = {influencer_username: user};
	Influencer.remove(query, callback);
}

// Function to update a particular influencer by username
// Consider what all needs to be updated
module.exports.updateInfluencer = function(username, influencer, options, callback){
	var query = {'influencer_username' : username};
	var update = {
		firstname: influencer.firstname,
		lastname: influencer.lastname
	}
	Influencer.findOneAndUpdate(query, update, options, callback);
}

// Function to update a particular influencer by emailid
// Consider what all needs to be updated
module.exports.updatePassword = function(emailid, influencer, options, callback){
	console.log(emailid);
	var query = {'emailid' : emailid};
	if(passreset == true){
		var update = {
			influencer_password: influencer.influencer_password
		}
		Influencer.findOneAndUpdate(query, update, options, callback);
		passreset = false;
	}
}
