// Application to get list of influencers from database and send it to front end
// currently using a script called in test.html
// which will receive the object
// important command is res.end

var express = require('express');
var router = express.Router();
console.log('Inside list of Influencers');

// Has to be read from database.
var jsonFileName = './dummyinfluencerlist.json';

router.get('/', function(req, res) {
	var fs = require("fs");
	// This has to come from APIs in the future.
	// Hardcoded file being used for now.
	fs.readFile(jsonFileName, 'utf8', onFileRead);
	
	// Object to store the applicants who meet the minimum qualifications
	var obj = {
		influencers: []
	};

	function onFileRead(err, data) {
		if(err) {
			console.error(err);
		} else {
			var currentPackage = JSON.parse(data);
			console.log(currentPackage.categoryName);
			// Checking for influencers in applicants
			for(var influencers in currentPackage.influencers) {
				var currInfluencer = currentPackage.influencers[influencers];
				console.log(influencers + ":" + currInfluencer.applicantusername);
				obj.influencers.push(currInfluencer);
			}

			return res.end(JSON.stringify(obj));

		}
	}
});

module.exports = router;
