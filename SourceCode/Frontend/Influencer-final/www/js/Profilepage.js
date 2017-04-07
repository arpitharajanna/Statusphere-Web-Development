var app = angular.module("appProfile", []);
app.controller('ctrlProfile', function ($scope, $http, $window) {
    $http.get('/Json/Countries.json').then(function (response) {

        $scope.countries = response.data.countries;
    });
    $http.get('/Json/States.json').then(function (response) {

        $scope.states = response.data.states;
    });
    $scope.GetSelectedCountry = function () {
        $scope.strCountry = $scope.form.selectCountry;
    };


    $scope.someSelected = function (object) {
        if (!object) return false;
        return Object.keys(object).some(function (key) {
            return object[key];
        });
    }

    $scope.doTouched = function () {
        $scope.theForm.subscribe.$setTouched();
    }

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
                window.location.href = "http://localhost:57257/Statustodo.html";
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
