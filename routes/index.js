var express = require('express');
var router = express.Router();
var mongodb= require('mongodb');
console.log("Welcome")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thelist',function(req,res){
	var MongoClient= mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/yesy_1'
	MongoClient.connect(url,function(err,db){
		if(err){
			console.log('Unable to connect to the server',err);
		}
		else{
			console.log("Connection Established",url);
			var collection=db.collection('students');
			collection.find({}).toArray(function(err,result){
				if(err){
					res.send(err);
				} else if(result.length) {
					result.forEach(function(value){
				  		console.log(value);
					});
					res.send('plz check the console');
      		} else {
        			res.send('No documents found');
      		}
      		//Close connection
      		db.close();
			})
		}
	})
})


router.get('/random', function(req, res) {
	res.send('Inside random');
})
// router.get('/newstudent',function(req,res){
// 	res.render('studentList',{student_list_item:studentlist})
// });
// Adding a comment so it commits. Will remove later.
module.exports = router;
