var app = angular.module('Startup', []);
app.controller("myctrl", function ($scope,$http,$window) {


    /*$scope.login = function () {
        window.location = "login.html";
    }
    $scope.register = function () {
        window.location = "signup.html";
    }*/


    // 

    // Facebook Login
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

    // Twitter Login 
    $scope.twitterLogin = function () {
        alert("Twitter Login");
    }
    // Google Plus Login
    $scope.googleplusLogin = function () {
        // Google's OAuth 2.0 endpoint for requesting an access token

        window.location = "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.metadata.readonly&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://joinstatus.com/&response_type=token&client_id=727180293449-nt9gj5f6tup99q7atce93ip6o5beh78r.apps.googleusercontent.com";

        // Google's OAuth 2.0 endpoint for requesting an access token

        /*
        // Java Script Implementation:    
        var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
        // Create <form> element to submit parameters to OAuth 2.0 endpoint.
        var form = document.createElement('form');
        form.setAttribute('method', 'GET'); // Send as a GET request.
        form.setAttribute('action', oauth2Endpoint);
        // Parameters to pass to OAuth 2.0 endpoint.
        var params = {'client_id': '727180293449-nt9gj5f6tup99q7atce93ip6o5beh78r.apps.googleusercontent.com',
                      'redirect_uri': 'http://joinstatus.com/',
                      'response_type': 'token',
                      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
                      'include_granted_scopes': 'true',
                      'state': 'pass-through value'};
        // Add form parameters as hidden input values.
        for (var p in params) {
            var input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', p);
            input.setAttribute('value', params[p]);
            form.appendChild(input);
        }
        // Add form to page and submit it to open the OAuth 2.0 endpoint.
        document.body.appendChild(form);
        form.submit();*/
    }
    // Instagram Login
    $scope.instagramLogin = function () {
        window.location = "https://instagram.com/oauth/authorize/?client_id=2ae73508dca141f891f5f099ce1c6a84&amp;redirect_uri=http://joinstatus.com/&amp;response_type=token";
    }

    /* register function  */
    $scope.formModel = {
        submit: function () {
            alert("hi");
            if ($scope.formModel.$invalid || $scope.formModel.password != $scope.formModel.password1)
                return false;
            else {
                

                var data={
                            username: $scope.formModel.name,
                            email: $scope.formModel.email,
                            password: $scope.formModel.password
                        }


                $http.post("/register", data).then(function (response) {
                    console.log('Data posted successfully');
                    console.log(data.username); 
                    alert(response.data.message);
                },
                function(error){
                    alert(error.data.message);
                }
                )
                
            }
        }
    };

    /*Login Function*/

    $scope.login = function () {

       
                var data={
                            username: $scope.formLogin.username,
                            password: $scope.formLogin.password
                        }
        console.log(data.username);
        console.log(data.password);

         $http.post("/login", data).then(function (res) {
                                                     console.log('Data posted successfully');
                                                     alert(res.data.message);
                                                      $scope.message = res.data.message;
                                                     //$cookies.put('username', data.username);
                                                    // localStorage.setItem("username", data.username);
						     $window.sessionStorage.setItem("user_name", $scope.formLogin.username);
                                                     $scope.usern = $window.sessionStorage.getItem("user_name");
                                                     window.location.href = "http://localhost:3000/Statustodo.html";
                                                 },
                                                 function(error) {
                                               // Handle error here
                                               console.log(error.data);
                                               alert(error.data.message);
                                                    }


                                                 );

    }


});
