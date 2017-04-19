
/*
Script Name: admin_package.js
Description: 1. Used to populate data of all influencers from database 
             2. Functionalities for sending notification
             3. View Profile     
*/
var packageListObj = [

      {
          "Name": "hello",
          "ProductID": "ING1234",
          "QuantityAccepted": "2",
          "QuantityAvailable": "3",
          "DateCreated": "04-23-2017",
          "DateDue": "04-23-2017",
          "ProductInfo": "dsjadsjad kdsahjkdhsa"

      },

      {
          "Name": "pollo",
          "ProductID": "VNG1234",
          "QuantityAccepted": "2",
          "QuantityAvailable": "3",
          "DateCreated": "04-23-2017",
          "DateDue": "08-23-2017",
          "ProductInfo": "dssjad kdsahjkdhsa"

      },

      {
          "Name": "awlo",
          "ProductID": "ING1244",
          "QuantityAccepted": "2",
          "QuantityAvailable": "3",
          "DateCreated": "04-23-2017",
          "DateDue": "02-23-2017",
          "ProductInfo": "dsjadsjad kdshsa"

      },
      {
          "Name": "llo",
          "ProductID": "CNG1244",
          "QuantityAccepted": "2",
          "QuantityAvailable": "3",
          "DateCreated": "04-23-2017",
          "DateDue": "04-23-2017",
          "ProductInfo": "dsjadsjad ahjkdhsa"


      }

    ]

var myapp = angular.module('myapp', []);
myapp.controller('myCtrl', function ($scope,$http) {

    $scope.names = packageListObj;  //Old one 

    // Generally, we expect all the above fields for Packagelist, which , presently not being transferred.
    $http.get('http://localhost:3000/api/productlist').then(function(response) {
            $scope.names = response.data; // To be UPdated when there is any data into the database, and all the required fields matches.
            /*alert("S:" + response.data[0].product_Id);
            alert("S:" + response.data[0].username);
            alert("S:" + response.data[0].status);
            alert("S:" + response.data[0].package_Timestamp);*/
            //$scope.names = packageListObj;
        });
    
});
