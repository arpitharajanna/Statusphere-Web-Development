// Application to get list of packages from database and send it to front end
// All actions will happen in /models


var express = require('express');
var router = express.Router();
console.log('Inside list of Packages');

var Package = require('../../models/package');

///////////////////////////////////////////////////////

// Getting list of all packages
router.get('/', function(req, res) {
	console.log("Inside get all Packages");
	Package.getPackages(function(err, packages) {
		if(err){
			throw err;
		}
		res.json(packages);
	});
});




// Getting a single Package by username
router.get('/:_username', function(req, res) {
	Package.getPackageByName(req.params._username, function(err, package) {
		if(err){
			throw err;
		}
		res.json(package);
	});
});



// Removing a single Package by username
router.delete('/:_user', function(req, res) {
	Package.deletePackageByName(req.params._user, function(err, package) {
		if(err){
			throw err;
		}
		res.json(package);
	});
});


// Updating a single Packages firstname and lastname by filtering with packagename
router.put('/:_packagename', function(req, res) {
	var packagename = req.params._packagename;
	var package = req.body;
	Package.updatePackage(packagename, package, {}, function(err, package) {
		if(err){
			throw err;
		}
		res.json(package);
	}, "lala land");
});

///////////////////////////////////////////////////////

module.exports = router;
