// Application to get list of Products from database and send it to front end
// All actions will happen in /models


var express = require('express');
var router = express.Router();
console.log('Inside list of Products');

var Product = require('../../models/product');

///////////////////////////////////////////////////////

// Getting list of all Products
router.get('/', function(req, res) {
	console.log("Inside get all Products");
	Product.getProducts(function(err, products) {
		if(err){
			throw err;
		}
		res.json(products);
	});
});



// Adding an applicant
router.post('/', function(req, res) {
	var product = req.body;
	console.log("Inside add Product");
	console.log("ProductID   :" + product.productID);
	Product.addProduct(product, function(err, product) {
		if(err){
			// Sending an error back if duplicate encountered or some invalid scheme is seen.
			// throw err;
			var msg = 'Did not add to product to db. Possible duplicate/invalid schema';
			res.status(404).send({ error: msg});
			console.log(msg);
		}
		res.json(product);
	});
});


// Getting a single Product by productID
router.get('/:_productID', function(req, res) {
	Product.getProductByName(req.params._productID, function(err, product) {
		if(err){
			throw err;
		}
		res.json(product);
	});
});



// Removing a single Product by product name
router.delete('/:_Name', function(req, res) {
	Product.deleteProductByName(req.params._Name, function(err, product) {
		if(err){
			throw err;
		}
		res.json(product);
	});
});

// Removing a single Product by product name
router.delete('/:_productID', function(req, res) {
	Product.deleteProductByName(req.params._productID, function(err, product) {
		if(err){
			throw err;
		}
		res.json(product);
	});
});

// Updating a single Products firstname and lastname by filtering with Productname
router.put('/:_Productname', function(req, res) {
	var Productname = req.params._Productname;
	var product = req.body;
	Product.updateProduct(Productname, product, {}, function(err, product) {
		if(err){
			throw err;
		}
		res.json(product);
	}, "lala land");
});

///////////////////////////////////////////////////////

module.exports = router;
