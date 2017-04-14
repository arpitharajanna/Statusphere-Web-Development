var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
product_Name:{
	type:String,
	unique :true,
	required : true
},
image_url: {
	type: String,
	required: true
},
description:{
	type:String,
	required: true

},
brand_instagram: {
	type: String,
	required: true
},
category:{
	type: String,
	required : true
},
quantity:{
	type: Number,
	required: true
},
points_required:{
	type:Number
},
requirements: {
	type: String,
	required: true
}

});

module.exports = mongoose.model('product', productSchema);
