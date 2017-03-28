var mongoose = require('mongoose');

var packageSchema = new mongoose.Schema({
product_id{
	type: Number,
	unique :true,
	required : true
},
influencer_id{
	type: Number,
	unique: true,
	required: true

},
tracking_id{
	type: Number,
	unique: true,
	required : true
},
status{
	type: varchar,
	required: true
},
shipping_date{
	type: Date,
	required:true

},
package_timestamp{
	type: Date,
	required: true
}
});

module.exports = mongoose.model('package', packageSchema);