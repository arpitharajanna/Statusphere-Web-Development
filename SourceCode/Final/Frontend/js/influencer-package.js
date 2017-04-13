var app = angular.module('myapp', []);
app.controller('myCtrl', function ($scope) {

    $scope.obj = [

          {
              "Firstname": "hello",
              "Lastname": "howare",
              "Packagename": "uoi",
              "Duedate": "04-05-2017",
              "Accepteddate": "04-23-2017",
              "Status": "accepted"

          },
          {
              "Firstname": "llo",
              "Lastname": "are",
              "Packagename": "uoi",
              "Duedate": "04/05/2017",
              "Accepteddate": "04/23/2017",
              "Status": "accepted"

          },
           {
               "Firstname": "abc",
               "Lastname": "re",
               "Packagename": "uoi",
               "Duedate": "04-05-2017",
               "Accepteddate": "04-23-2017",
               "Status": "accepted"

           }
    ];
    

        
    
    //alert("hi");
});
