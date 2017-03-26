var express = require('express');
var router = express.Router();
console.log('inside accepted list');
var minNoOfInstagramFollowers = 3000;
var minNoOfPosts = 50;
var minAvgLikes = 250;
var minAvgComments = 20;

var jsonFileName = './dummyacceptedlist.json'
router.get('/', function(req, res) {
	var fs = require("fs");
	// This has to come from APIs in the future.
	// Hardcoded file being used for now.
	fs.readFile(jsonFileName, 'utf8', onFileRead);
	
	var obj = {
		influencers: []
	};
	function onFileRead(err, data) {
		if(err) {
			console.error(err);
		} else {
			var currentPackage = JSON.parse(data);
			console.log(currentPackage.categoryName);
			for(var applicants in currentPackage.applicants) {
				var currApplicant = currentPackage.applicants[applicants];
				console.log(applicants + ":" + currApplicant.applicantusername);
				if(minQualification(currApplicant, applicants)) {
					obj.influencers.push(currApplicant);
				}
			}
			var json = JSON.stringify(obj);
			fs.writeFile('./acceptedlist.json', json, 'utf8', function(err) {
				if(err) {
					return console.error(err);
				}
			});
		}
	}
	console.log("Let\'s go to the webpage now");
	res.render('acceptedlist', { title: 'Here\'s your list of Influencers', json: obj });
});


// Function to check if the applicant meets the minimum qualifications required to become an Influencer.
// data holds the applicant object currently being checked.
// Following checks done:
// Does applicant meet:
// 1. Minimum no of instagram followers?
// 2. Minimum no of post?
// 3. Average likes per post?
// 4. Average comments per post?
function minQualification(data, index) {
	if(data.noofinstagramfollowers > minNoOfInstagramFollowers && data.noofposts > minNoOfPosts) {
		if(data.averagenooflikes > minAvgLikes && data.averagenoofcomments > minAvgComments) {
			return true;	
		} else {
			return false;
		}		
	} else {
		return false;
	}
}

module.exports = router;
