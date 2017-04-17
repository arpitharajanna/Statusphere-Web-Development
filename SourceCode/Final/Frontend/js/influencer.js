/*
Script Name: influencer.js
Description: 1. Used to populate data of all influencers from database 
             2. Functionalities for sending notification
             3. View Profile     
*/

    //  JSON object from DB/API for influencer list
    influencerListObj = [

      {   

   "Firstname": "meoutside",
       "Lastname": "poaaeside",
       "InstagramID": "wqesidegirl",
       "EmailID" : "abbvsh@gmail.com",
       "NoInstagramFollowers": 320000,
       "Age": 23,
       "Gender": "male",
       "DateAccepted": "06-01-2017"
       },

   {

       "Firstname": "outside",
       "Lastname": "aeside",
       "InstagramID": "sidegirl",
       "EmailID": "qwrtwsh@gmail.com",
       "NoInstagramFollowers": 320,
       "Age": 23,
       "Gender": "male",
       "DateAccepted": "06-01-2017"

   },

   {
       
       "Firstname": "side",
       "Lastname": "aide",
       "InstagramID": "degirl",
       "EmailID": "pquwsh@gmail.com",
       "NoInstagramFollowers": 3200,
       "Age": 23,
       "Gender": "female",
       "DateAccepted": "06-01-2017"

   }
   
    ]


    var app = angular.module('myapp', []);
    app.controller('myCtrl', function ($scope,$http) {

    //$scope.names =  influencerListObj;
    
    
    $http.get('http://localhost:3000/api/influencerlist').then(function(response) {
            $scope.names = response.data;
        });
        
    
});
