var myapp = angular.module('myapp', []);
myapp.controller('myCtrl', function ($scope) {

    $scope.names =
    [

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
    ;
});
