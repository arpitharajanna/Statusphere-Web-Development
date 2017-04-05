var app = angular.module("appProfile", []);
app.controller('ctrlProfile', function ($scope, $http, $window) {
    $http.get('/Json/Countries.json').then(function (response) {

        $scope.countries = response.data.countries;
    });
    $http.get('/Json/States.json').then(function (response) {

        $scope.states = response.data.states;
    });

    /*  for (var i = 0; i < country_arr.length; i++)
      {
          $scope.country_name = country_arr[i];
      }
      for (var j = 0; j < s_a.length; j++) {
          $scope.state_name = s_a[i];
      }
      */
    $scope.form = {


        submit: function () {
            if ($scope.form.$invalid)
                return false;
            else {
                /*  var data = $.param({
                      applicant: JSON.stringify({
                          username: $scope.name,
                          email: $scope.email,
                          password: $scope.password,

                      })
                  }); */
                alert("success");
                /* $http.post("/", data).success(function (response) {
                     console.log('Data posted successfully');
                     alert(response);  
                     
                 }); */
                window.location.href = "http://localhost:57257/Startup.html";
            }
        }
    };


});
app.directive('myUpload', [function () {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            var reader = new FileReader();
            reader.onload = function (e) {
                scope.image = e.target.result;
                scope.$apply();
            }

            elem.on('change', function () {
                reader.readAsDataURL(elem[0].files[0]);
            });
        }
    };
}]);
