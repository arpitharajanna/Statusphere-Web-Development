var mongoose = require('mongoose');


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var packageSchema = new mongoose.Schema({
	// Why is product_Id of type ObjectId
	// Didn't make sense so commenting for now.
	/*product_Id:{
		type: ObjectId,
		unique :true,
		// change this back to true if required
		// Not sure how to get an ObjectId from mongoDB
		required : false
	},*/
	packagename:{
		type: String,
		required: true
	},
	quantityaccepted:{
		type: Number,
		required: true
	},
	quantityavailable:{
		type: Number,
		required: true
	},
	packageinfo:{
		type: String,
		required: true
	},
	username:{
		type: String
	},
	status:{
		type: String
		
	},
	package_Timestamp:{
		type: Date
	}
});

var Package = module.exports = mongoose.model('package', packageSchema);

// Function to add packages
// Have to handle schema enforcement
module.exports.addPackage = function(package, callback, random){
	console.log(random);
	Package.create(package, callback);
}

// Function to get list of all Packages
module.exports.getPackages = function(callback, limit){
	Package.find(callback).limit(limit);
}

// Function to get package detail by username alone.
module.exports.getPackageByName = function(packagename, callback){
	Package.findOne({'packagename':packagename}, callback);
}

// Function to delete a particular package by username
module.exports.deletePackageByName = function(user, callback){
	console.log('going to delete ' + user +'!!!! ');
	var query = {packagename: user};
	Package.remove(query, callback);
}

// Function to update a particular package by username
// Consider what all needs to be updated
module.exports.updatePackage = function(packagename, package, options, callback){
	var query = {'packagename' : packagename};
	var update = {
		quantityaccepted: package.quantityaccepted,
		quantityavailable: package.quantityavailable,
		packageinfo: package.packageinfo
	}
	Package.findOneAndUpdate(query, update, options, callback);
}