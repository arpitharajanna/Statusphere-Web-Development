var appProfile = angular.module("appStatusbox", []);
appProfile.controller("ctrlStatusbox", function ($scope, $http) {
    $http.get("/json/statusbox.json").then(function (response) {          //Read json file
        $scope.statusbox = response.data.statusbox;
    });

    $scope.openmodal = function (productID) {
        $scope.productID = productID;
       alert("hi");
       $("#Product").modal();
       
    }
    $scope.addtobox = function () {
        alert("valid");
    }
});