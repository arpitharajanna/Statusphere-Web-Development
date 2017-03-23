var express = require('express');
var router = express.Router();
console.log('inside accepted list');

router.get('/', function(req, res) {
	var fs = require("fs");
	// This has to come from APIs in the future.
	// Hardcoded file being used for now.
	fs.readFile('./dummyacceptedlist.json', 'utf8', onFileRead);
	
	//var jsonfile = require('jsonfile');
	//var file = './modifiedlist.json';
	
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
				console.log(applicants + ":" + currentPackage.applicants[applicants].username);
				if(currentPackage.applicants[applicants].noofinstagramfollowers > 100000 && currentPackage.applicants[applicants].averagenooflikes > 600) {
					obj.influencers.push(currentPackage.applicants[applicants]);
				}
			}
			var json = JSON.stringify(obj);
			fs.writeFile('./acceptedlist.json', json, 'utf8', function(err) {
				if(err) {
					return console.error(err);
				}
			});
			//res.render('acceptedlist', { title : 'blah blah' , followercount : currentPackage.categoryName, wholedata : currentPackage } );
		}
	}
});

module.exports = router;
