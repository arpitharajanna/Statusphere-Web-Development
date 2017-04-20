
/*
Script Name: product_list.js
Description: 1. Used to populate data of all products from database 
                
*/

var myapp = angular.module('myapp', []);
myapp.controller('myCtrl', function ($scope,$http) {

    alert("Product List Page");

   
    $scope.createProduct = function()
    {
      alert("craete product");

    }
    // Generally, we expect all the above fields for Packagelist, which , presently not being transferred.
    $http.get('http://localhost:3000/api/productlist').then(function(response) {
            // To be UPdated when there is any data into the database, and all the required fields matches.
            $scope.products = response.data;

    });
});
