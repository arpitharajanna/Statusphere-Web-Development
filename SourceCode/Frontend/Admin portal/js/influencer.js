var myapp = angular.module("myapp", []);
myapp.controller("myCtrl", function ($scope, $http) {
    $http.get("/json/influencer.json").then(function (response) {          //Read json file
        $scope.names = response.data.names;
    });
    //alert("hi");
});