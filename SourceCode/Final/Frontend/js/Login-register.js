var app = angular.module('Startup', []);
app.controller("myctrl", function ($scope, $http, $window) {
    $scope.FBlogin = function () {
        FB.login(function (response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('http://joinstatus.com/', function (response) {
                    console.log('Good to see you, ' + response.name + '.');
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });
    };
    /*    $scope.formModel = {};
         $scope.jsonStructure = [];
         $scope.submitting = false;
         $scope.submit = function () {
           if (valid) {
                 $scope.jsonStructure.push($scope.formModel);
                 $scope.submitting = true;
                 console.log($scope.formModel);
                 alert($scope.formModel);
                 $http.post('Sample.json', $scope.jsonStructure).success(function(data){
                     console.log($scope.jsonStructure);
                     console.log(':)');
                     $scope.submitting = false;
                 }).error(function(data){
                     console.log(':(');
                     $scope.submitting = false;
                 });
             */
    //   } else {
    //  console.log('Invalid');
    //   };
    /*    $scope.submit = function () {
            var data = $.param({
                book: JSON.stringify({
                    username: $scope.name,
                    email: $scope.email,
                    password: $scope.password,
                })
            });
            $http.post("/", data).success(function (response) {
                console.log('Data posted successfully');
                alert(response);
                var l = response.length;
                response[0].username;
                var  sample = response.rows.row;
                for (var i = 0 ; i < l ; i++) {
                    alert(response[i].username);
                }
            })
        };
        */
    $scope.formModel = {
        submit: function () {
            if ($scope.formModel.$invalid || $scope.formModel.password != $scope.formModel.password1)
                return false;
            else {
                /*  var data = $.param({
                      applicant: JSON.stringify({
                          username: $scope.name,
                          email: $scope.email,
                          password: $scope.password,
                      })
                  }); */
                alert($scope.formModel.name + ' ' + $scope.formModel.password);
                /* $http.post("/", data).success(function (response) {
                     console.log('Data posted successfully');
                     alert(response);
                 }); */
                window.location.href = "http://localhost:57257/Profile.html";
            }
        }
    };
    $scope.formLogin = {
        login: function () {
            if ($scope.formLogin.$invalid)
                return false;
            else {
                /*  var data = $.param({
                      applicant: JSON.stringify({
                          username: $scope.name,
                          email: $scope.email,
                          password: $scope.password,
                      })
                  }); */
                alert($scope.formLogin.username + ' ' + $scope.formLogin.password);
                /* $http.post("/", data).success(function (response) {
                     console.log('Data posted successfully');
                     alert(response);
                 }); */

                $window.sessionStorage.setItem("user_name", $scope.formLogin.username);
                $scope.usern = $window.sessionStorage.getItem("user_name");
                window.location.href = "http://localhost:57257/Statustodo.html";
            }
        }
    };
    /*
                $scope.formModel = {
                    onsubmit: function (event) {
                        if (dataIsntValid) {
                            displayErrors();
                            event.preventDefault();
                            alert("failure");
                        }
                        else {
                            submitData();
                            alert("success");
                        }
                    }
                };
                */
    /*     $scope.reset = function (theForm) {
             $scope.master = {};
             theForm.$setPristine();
             $scope.formModel = {};
             theForm.$setUntouched();
         };
         */
});