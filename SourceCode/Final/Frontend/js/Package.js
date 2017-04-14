
/*
Script Name: admin_package.js
Description: 1. Used to populate data of all influencers from database 
             2. Functionalities for sending notification
             3. View Profile     
*/
var packageListObj = [

      {
          "Name": "hello",
          "QuantityAccepted": "2",
          "QuantityAvailable": "3",
          "DateCreated": "04-23-2017",
          "DateDue": "04-23-2017",
          "PackageStatus": "accepted"

      },

      {
          "Name": "pollo",
          "QuantityAccepted": "2",
          "QuantityAvailable": "3",
          "DateCreated": "04-23-2017",
          "DateDue": "08-23-2017",
          "PackageStatus": "accepted"

      },

      {
          "Name": "awlo",
          "QuantityAccepted": "2",
          "QuantityAvailable": "3",
          "DateCreated": "04-23-2017",
          "DateDue": "02-23-2017",
          "PackageStatus": "accepted"

      },
      {
          "Name": "llo",
          "QuantityAccepted": "2",
          "QuantityAvailable": "3",
          "DateCreated": "04-23-2017",
          "DateDue": "04-23-2017",
          "PackageStatus": "accepted"


      }

    ]

var myapp = angular.module('myapp', []);
myapp.controller('myCtrl', function ($scope) {

    $scope.names = packageListObj;
});
