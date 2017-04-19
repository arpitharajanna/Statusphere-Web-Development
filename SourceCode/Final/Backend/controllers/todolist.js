var mongoose = require('mongoose')
var package = require('../models/package'); 
var Product = require('../models/product');


module.exports.getProducts = function(req,res){

Product.find({},function(err,Products){
if(err){
	
		res.status(404).json({message:"username already exists"}
	);
}
else{
	res.status(200);
	res.json({
		"message":Products
	});
}
}
)
}
