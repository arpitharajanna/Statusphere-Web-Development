var app = angular.module('myapp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http.get("/json/influencer-package.json")
    .then(function (response) {
        $scope.influencer_package = response.data.influencer_package;
    });
    alert("hi");
});