var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var applicant = require('../models/applicant');
// var BasicStrategy = require('passport-http').BasicStrategy;


passport.use(new LocalStrategy({
    usernameField: 'username'
  },
  function(username, password, done) {
    applicant.findOne({ username: username }, function (err,applicant) {
      if (err) { return done(err); }
      // Return if user not found in database
      if (!applicant) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      console.log(applicant.password);
      //Return if password is wrong
      if (applicant.password!=password) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
     // If credentials are correct, return the user object
      return done(null, applicant);
    });
  }
));
// passport.use(new BasicStrategy(
//   function(username, password, callback) {
//     applicant.findOne({ username: username }, function (err, Applicant) {
//       if (err) { return callback(err); }

//       // No user found with that username
//       if (!Applicant) { return callback(null, false); }

//       // Make sure the password is correct
//       Applicant.verifyPassword(password, function(err, isMatch) {
//         if (err) { return callback(err); }

//         // Password did not match
//         if (!isMatch) { return callback(null, false); }

//         // Success
//         return callback(null, Applicant);
//       });
//     });
//   }
// ));

// exports.isAuthenticated = passport.authenticate('basic', { session : false });