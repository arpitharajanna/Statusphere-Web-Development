var appStatusbox = angular.module("appStatusbox", []);
appStatusbox.controller("ctrlStatusbox", function ($scope, $http, $window) {
    $http.get("/json/statusbox.json").then(function (response) {          //Read json file
        $scope.statusbox = response.data.statusbox;
        
    },
                                                 function(error) {
                                               // Handle error here
                                               console.log(error.data);
                                               alert(error.data.message);
                                                    });
   
  //  $scope.usern = $window.sessionStorage.getItem("user_name");
    $scope.usern = $window.localStorage.getItem("user_name");
    $scope.openmodal = function (productID) {
        $scope.productID = productID;
        // $scope.reqField = 'false';
        $scope.errormessage = '';
       $("#Product").modal();
       
    }
    
    $scope.changestatus = function () {
        $scope.reqField = 'true';
        $scope.errormessage = '';
    }
    $scope.errormessage = '';
    $scope.addtobox = function () {
    
        if( $scope.reqField == 'true')
        {
            //alert("valid");
//             $scope.productid = $scope.productID;
//             alert($scope.productid);
//             var statusboxdata = $.param({
//                 statusboxDetails: JSON.stringify({
//                     username: $scope.usern,
//                     productId: $scope.productid
//                 })
//             });
            var statusboxdata = {
                    username: $scope.username,
                    product_Id: $scope.productID
            }
            
            
            alert(statusboxdata);

            $http.post("", statusboxdata).then(function (res) {
                 console.log('Data posted successfully');
                 alert("Package has been added")
             },
               function(error) {
                                               // Handle error here
                               console.log(error.data);
                               alert(error.data.message);
                                    });

        }
        else
        {
            alert($scope.reqField);
           // alert("invalid");
            $scope.errormessage = "Please select Product agreement";
        }
        
       
    }
});
