var app = angular.module("code_app", []);
app.controller("code_ctrl", function ($scope, $http) {
    $scope.email = localStorage.getItem("email");

    $scope.check = function () {



        var data = JSON.stringify({

            emailid: $scope.email,
            randomcode: $scope.code
        })


        $http.post("/api/verificationlist/code/" + $scope.email, data).then(function (response) {
            alert(response.data.match);

            if (response.data.match == true) {
                window.location.href = "PaswordReset.html";
            }
            else {
                alert("You entered wrong code. Please enter correct code.");
            }
        })


    }
    $scope.code_notobtained = function () {


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
    $("#code-alert").hide();
    $("#codelink").click(function showAlert() {
        $("#code-alert").alert();
        $("#code-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#code-alert").slideUp(500);
        });
    });


});
