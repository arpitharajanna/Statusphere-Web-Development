var app = angular.module("reset_pwd_app", []);
app.controller("reset_pwd_ctrl", function ($scope) {

    $scope.pass_reset = {


        click: function () {
            if ($scope.pass_reset.$invalid || $scope.pass_reset.pass != $scope.pass_reset.pass1)
                return false;
            else {
                /*  var data = $.param({
                      applicant: JSON.stringify({
                          username: $scope.name,
                          email: $scope.email,
                          password: $scope.password,
                      })
                  }); */
                alert("sucess");
                /* $http.post("/", data).success(function (response) {
                     console.log('Data posted successfully');
                     alert(response);  
                     
                 }); */
                window.location.href = "Startup.html";
            }
        }
    };

});