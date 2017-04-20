
/*
Script Name: product_list.js
Description: 1. Used to populate data of all products from database 
                
*/

var myapp = angular.module('myapp', []);
myapp.controller('myCtrl', function ($scope,$http) {

    alert("Product List Page");

    // Initially Load few product fields into the product list page
    $http.get('api/productlist').then(function(response) {
            // To be UPdated when there is any data into the database, and all the required fields matches.
            $scope.products = response.data;

    });
   
    $scope.createProduct = function()
    {
      alert("craete product");

    }

    // Dislay all the information of a product
    $scope.viewProduct = function( productName)
    {
      alert("View Product:" + productName);
      $("#divProductInfo").html("");
      var table = "<table name='tblSentMessage' styel='border:blue'><tbody>";

      // Get Notification Messages
      $http.get("api/productlist/" + productName).then(function (response) {
          var productInfo = response.data;
          var table = "<table name='tblProductInfo' styel='border:blue'><tbody>" ;       
          table += "<tr><td> Name</td><td><input type='text' value='" + productInfo['product_Name'] + "' readonly </td></tr>";
          table += "<tr><td> Description </td><td><input type='text' value='" + productInfo['productID'] + "' readonly </td></tr>";
          table += "<tr><td> Description </td><td><input type='text' value='" + productInfo['description'] + "' readonly </td></tr>";
          table += "<tr><td> Requirements </td><td><textarea  readonly rows='2' cols='30' >" + productInfo['requirements'].join() + "</textarea> </td></tr>";
          table += "<tr><td> Categories </td><td><textarea  readonly rows='2' cols='30' >" + productInfo['categories'].join() + "</textarea> </td></tr>";
          table += "<tr><td> Quantity </td><td><input type='text' value='" + productInfo['quantity'] + "' readonly </td></tr>";
          table += "<tr><td> Brand URL  </td><td><input type='text' value='" + productInfo['brand_Url'] + "' readonly </td></tr>";
          table += "<tr><td> Video Link </td><td><input type='text' value='" + productInfo['video_Link'] + "' readonly </td></tr>";
          table += "<tr><td> Instragram  </td><td><input type='text' value='" + productInfo['brand_Instagram'] + "' readonly </td></tr>";
          table += "<tr><td> Required Points  </td><td><input type='text' value='" + productInfo['points_required'] + "' readonly </td></tr>";
          table += "<tr><td> Date Created  </td><td><input type='text' value='" + productInfo['points_required'] + "' readonly </td></tr>";       
          table += "</tbody></table>";

          $(table).appendTo("#divProductInfo");
          console.log(table);

      });
      $("#divViewProduct").modal();

      
    }
    
});
