var app = angular.module("forgotpass_app", []);
app.controller("forgotpass_ctrl", function ($scope, $http) {

    $scope.forgotpassword = {


        clickme: function () {
            if ($scope.forgotpasword.$invalid)
                return false;
            else {
                /*  var data = $.param({
                      applicant: JSON.stringify({
                          username: $scope.name,
                          email: $scope.email,
                          password: $scope.password,

                      })
                  });*/
                alert($scope.forgotpassword.email);
                /* $http.post("/", data).success(function (response) {
                     console.log('Data posted successfully');
                     alert(response);  
                     
                 }); 
                window.location.href = "http://localhost:57257/Profile.html";*/
            }
        }



    };
});