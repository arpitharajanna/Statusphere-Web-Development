var app = angular.module('myapp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http.get("json/applicant_info.json")
    .then(function (response) {
        $scope.applicant_info = response.data.applicant_info;
    });
    //alert("hi");
});