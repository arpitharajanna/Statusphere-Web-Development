var express = require('express');
var router = express.Router();
var mongodb= require('mongodb');
var jwt = require('express-jwt');
var moment = require('moment');


console.log("Welcome")
console.log(new Date())
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});


var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var create_Product=require('../controllers/CreateProduct');
var add_Package=require('../controllers/Add_Package');
var edit_Product=require('../controllers/Edit_Product');
var ctrlNotification = require('../controllers/notification');
var ctrlPackages     = require('../routes/api/packagelist'); // New controller script required for package


// profile
router.post('/profile', ctrlProfile.profile);
router.post('/editProfile', ctrlProfile.profileEdit);
// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.post('/product',create_Product.Create_Product);
router.post('/package',add_Package.AddPackage);
router.post('/editProduct',edit_Product.Edit_Product);

// we can use this for sending notification message and storing data into databse. 
router.post('/sendNotification', ctrlNotification.sendNotification);

// Get notification mesage from database
//router.get('/getNotificationMessage', ctrlNotification.getNotification);
//router.get('/', ctrlPackages.getPackages);



// app.use(function (err, req, res, next) {
//   if (err.name === 'UnauthorizedError') {
//     res.status(401);
//     res.json({"message" : err.name + ": " + err.message});
//   }
// });
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/thelist',function(req,res){
// 	var MongoClient= mongodb.MongoClient;
// 	var url = 'mongodb://localhost:27017/yesy_1'
// 	MongoClient.connect(url,function(err,db){
// 		if(err){
// 			console.log('Unable to connect to the server',err);
// 		}
// 		else{
// 			console.log("Connection Established",url);
// 			var collection=db.collection('students');
// 			collection.find({}).toArray(function(err,result){
// 				if(err){
// 					res.send(err);
// 				}
// 				else if(result.length) {

// 				result.forEach(function(value){
// 				  console.log(value);
// 				});
// 				res.send('plz check the console');
//       } else {
//         res.send('No documents found');
//       }
//       //Close connection
//       db.close();
// 			})
// 		}
// 	})
// })




// router.get('/newstudent',function(req,res){
// 	res.render('studentList',{student_list_item:studentlist})
// });
// Adding a comment so it commits. Will remove later.
module.exports = router;
