// Application to get list of applicants from database and send it to front end
// currently using a script called in test.html
// which will receive the object
// important command is res.end

var express = require('express');
var router = express.Router();
console.log('Inside list of Applicants');

// Has to be read from database.
var jsonFileName = './dummyapplicantlist.json';

router.get('/', function(req, res) {
	var fs = require("fs");
	// This has to come from APIs in the future.
	// Hardcoded file being used for now.
	fs.readFile(jsonFileName, 'utf8', onFileRead);
	
	// Object to store the applicants who meet the minimum qualifications
	var obj = {
		applicants: []
	};

	function onFileRead(err, data) {
		if(err) {
			console.error(err);
		} else {
			var currentPackage = JSON.parse(data);
			console.log(currentPackage.categoryName);
			// Checking for influencers in applicants
			for(var applicants in currentPackage.applicants) {
				var currApplicant = currentPackage.applicants[applicants];
				console.log(applicants + ":" + currApplicant.applicantusername);
				obj.applicants.push(currApplicant);
			}

			return res.end(JSON.stringify(obj));

		}
	}
});

module.exports = router;
