var mongoose = require('mongoose');
var applicant = require('../models/applicant');

module.exports.profileRead = function(req, res) {

  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    // Otherwise continue
    applicant
      .findById(req.payload._id)
      .exec(function(err, applicant) {
        res.status(200).json(applicant);
      });
  }

};