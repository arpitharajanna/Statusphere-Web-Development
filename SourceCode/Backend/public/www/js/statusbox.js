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
   
    $scope.usern = $window.sessionStorage.getItem("user_name");
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
            $scope.productid = $scope.productID;
            alert($scope.productid);
            var statusboxdata = $.param({
                statusboxDetails: JSON.stringify({
                    username: $scope.usern,
                    productId: $scope.productid
                })
            });
            alert(statusboxdata);

            /* $http.post("/Startup", data).success(function (data, status) {
                 console.log('Data posted successfully');
             })*/

        }
        else
        {
            alert($scope.reqField);
           // alert("invalid");
            $scope.errormessage = "Please select Product agreement";
        }
        
       
    }
});
