
var app = angular.module('myapp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http.get("/json/applicant_list.json")
    .then(function (response) {
        $scope.applicants = response.data.applicants;
    });
    alert("hi");
});