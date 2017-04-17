var app = angular.module("appProfile", []);
app.controller('ctrlProfile', function ($scope, $http, $window) {
 $scope.usern = localStorage.getItem("username");
    $scope.usern = localStorage.getItem("username");
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
    $scope.updateProfile = function()
    {
        var checked = $('.form-check-input:checked').map(function () {
            return this.value;
        }).get();
        if (checked.length) {
            //console.log(checked);
            $scope.selected = checked;
            //categories: checked;
        } else {
            console.log('null');
        }
      
        $scope.selected;
        var data = {
            image_url: $scope.form.myFile,
            firstname: $scope.form.fn,
            lastname: $scope.form.ln,
            dob: $scope.form.dob,
            gender: $scope.form.sex,
            instagram_url: $scope.form.insta,
            facebook_url: $scope.form.fb,
            twitter_url: $scope.form.tweet,
            snapchat_url: $scope.form.sc,
            youtubechannel: $scope.form.yc,
            Blog: $scope.form.blog,
            AddressLine1: $scope.form.addr1,
            AddressLine2: $scope.form.addr2,
            Country: $scope.form.selectCountry.name,
            State: $scope.form.selectstate.name,
            City: $scope.form.city,
            ZIPCode: $scope.form.zip,
            mob: $scope.form.phno,
            username:$scope.usern,
            
            categories: $scope.selected


        }
        $http.post("/editProfile", data).then(function (response) {
            console.log('Data posted successfully');
            alert(response.data.message);

},
                function (error) {

                    //$scope.errorm = error.data.message ;
                    alert(error.data.message);
                    //alert($scope.errorm);
                }
                )
       

       

       
    }


/*logout*/
$scope.logout = function (event) {
                localStorage.clear();        
                window.location.href = "http://localhost:3000/Startup.html";
            };

            $(document).ready(function () {
       function disableBack() { window.history.forward() }

       window.onload = disableBack();
       window.onpageshow = function (evt) {
           if (evt.persisted) disableBack()
      }
       
       
   });
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
        link: function (scope, elem, attrs, ngModel) {
            var validFormats = ['jpg', 'jpeg', 'png'];
            elem.bind('change', function () {
                validImage(false);
                scope.$apply(function () {
                    ngModel.$render();
                });
            });
            ngModel.$render = function () {
                ngModel.$setViewValue(elem.val());
            };
            function validImage(bool) {
                ngModel.$setValidity('extension', bool);
            }
            ngModel.$parsers.push(function (value) {
                var ext = value.substr(value.lastIndexOf('.') + 1);
                if (ext == '') return;
                if (validFormats.indexOf(ext) == -1) {
                    return value;
                }
                validImage(true);
                return value;
            });
        }
    };
});

