var appProfile = angular.module("appProfile", []);
appProfile.controller("ctrlProfile", function ($scope, $http) {
    $http.get("/json/countrystates.json").then(function (response) {          //Read json file
        $scope.country = response.data.country;
    });

    $scope.changeCountry = function () {
        $scope.selectCity = null;
    }
});