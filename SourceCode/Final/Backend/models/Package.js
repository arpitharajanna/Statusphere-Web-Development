var mongoose = require('mongoose');


var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var packageSchema = new mongoose.Schema({
product_Id:{
	type: ObjectId,
	unique :true,
	required : true
},
username:{
	type: String,

},
status:{
	type: String,
	
},
package_Timestamp:{
	type: Date,

}
});

module.exports = mongoose.model('package', packageSchema);