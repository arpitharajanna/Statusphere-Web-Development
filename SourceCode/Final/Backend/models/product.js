var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var requirement = require('./requirement');



var productSchema = new mongoose.Schema({
product_Name:{
	type:String,
	required:true
	
},
description:{
	type:String,
	required:true
	

},
requirements:{ 
	type:[String], 
        required:true 
},


image_Url:{
	type:String
},
categories:{
	type: String,
	required:true
	
},
quantity:{
	type: Number
	
},

brand_Url:{
	type: String

},

video_Link:{
	type: String
},

brand_Instagram:{
	type:String
},

points_required:{
	type:Number
	

}


});


module.exports = mongoose.model('product', productSchema);
