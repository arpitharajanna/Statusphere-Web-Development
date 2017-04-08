
var app = angular.module("code_app", []);
app.controller("code_ctrl", function ($scope, $window) {
    $scope.email = $window.sessionStorage.getItem("email");
    $scope.submit = function () {
        if ($scope.code.$invalid)
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
            window.location.href = "http://localhost:57257/PaswordReset.html";
        }
    };
    

    
});


