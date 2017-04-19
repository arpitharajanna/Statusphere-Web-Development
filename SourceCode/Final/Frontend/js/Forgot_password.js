var app = angular.module("forgotpass_app", []);
app.controller("forgotpass_ctrl", function ($scope, $http) {


    $scope.forgotpassword = function () {
        alert($scope.email);
        localStorage.setItem("email", $scope.email);



        var data = JSON.stringify({

            emailid: $scope.email

        })



        $http.post("/api/verificationlist", data).then(function (response) {

            console.log('Data posted successfully');

            if (response.data.bool == 1) {
                window.location.href = "Code.html";
            }

            else {
                alert("your email is invalid. Please enter correct email id");

            }
        })





    }
});
