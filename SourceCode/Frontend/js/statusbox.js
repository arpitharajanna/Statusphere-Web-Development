var appStatusbox = angular.module("appStatusbox", []);
appStatusbox.controller("ctrlStatusbox", function ($scope, $http) {
    $http.get("/json/statusbox.json").then(function (response) {          //Read json file
        $scope.statusbox = response.data.statusbox;
    });

    $scope.openmodal = function (productID) {
        $scope.productID = productID;
       // alert(productID);
       $("#Product").modal();
       
    }
    $scope.addtobox = function () {
        alert("valid");
    }
});
