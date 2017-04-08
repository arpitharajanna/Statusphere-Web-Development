// Packages read from database and send it to front end
// currently using a script called in test.html
// which will receive the object
// important command is res.end

var express = require('express');
var router = express.Router();
console.log('Inside list of Products');

// Has to be read from database.
var jsonFileName = './dummyproductslist.json';

router.get('/', function(req, res) {
	var fs = require("fs");
	// This has to come from APIs in the future.
	// Hardcoded file being used for now.
	fs.readFile(jsonFileName, 'utf8', onFileRead);
	
	// Object to store the applicants who meet the minimum qualifications
	var obj = {
		products: []
	};

	function onFileRead(err, data) {
		if(err) {
			console.error(err);
		} else {
			var currentCollection = JSON.parse(data);
			console.log(currentCollection.categoryName);
			// Checking for influencers in applicants
			for(var products in currentCollection.products) {
				var currProduct = currentCollection.products[products];
				console.log(product + ":" + currProduct.productusername);
				obj.products.push(currProduct);
			}

			return res.end(JSON.stringify(obj));

		}
	}
});

module.exports = router;
