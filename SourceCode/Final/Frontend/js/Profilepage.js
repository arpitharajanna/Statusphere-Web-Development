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
