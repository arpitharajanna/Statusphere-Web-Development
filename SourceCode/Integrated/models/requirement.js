var mongoose = require('mongoose');

var requirementSchema = new mongoose.Schema({
product_id:{
	type: Number,
	unique :true,
	required : true
},
requirement_description:{
	type:String,
	required: true

}

});

module.exports = mongoose.model('requirement', requirementSchema);