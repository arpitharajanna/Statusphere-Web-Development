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

    $scope.updateProfile = function () {
        alert("success");
    }


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

app.directive('validFile', function () {
    return {
        require: 'ngModel',
        link: function (scope, el, attrs, ctrl) {
            ctrl.$setValidity('validFile', el.val() != '');
            //change event is fired when file is selected
            el.bind('change', function () {
                ctrl.$setValidity('validFile', el.val() != '');
                scope.$apply(function () {
                    ctrl.$setViewValue(el.val());
                    ctrl.$render();
                });
            });
        }
    }
});
