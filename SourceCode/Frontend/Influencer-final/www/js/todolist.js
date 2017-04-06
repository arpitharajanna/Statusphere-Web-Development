var appTodolist = angular.module("status_app", []);
appTodolist.controller("status_ctrl", function ($scope, $http,$window) {

    $http.get("/json/todolist.json").then(function (response) {          //Read json file
        $scope.todolist = response.data.todolist;
    },
            function (error) {
                // Handle error here
                console.log(error.data);
                alert(error.data.message);
            }
    );
   // alert("hi");
    $http.get('/json/Profile.json').then(function (response) {
        $scope.userinfo = response.data.userinfo;
    });

    $http.get("/json/statusbox.json").then(function (response) {          //Read json file
        $scope.statusbox = response.data.statusbox;

    },
                                                 function (error) {
                                                     // Handle error here
                                                     console.log(error.data);
                                                     alert(error.data.message);
                                                 });

    //  $scope.usern = $window.sessionStorage.getItem("user_name");
    $scope.usern = $window.localStorage.getItem("user_name");
    $scope.openmodal = function (productID) {
        $scope.productID = productID;        
        $scope.errormessage = '';
      //  alert(productID);
        $("#Product").modal();
    }

    $scope.changestatus = function () {
        //$scope.reqField = 'true';
        $scope.errormessage = '';
    }
    $scope.errormessage = '';
    $scope.addtobox = function () {
        alert($scope.checked);

        if ($scope.checked) {
            var statusboxdata = {
                username: $scope.username,
                product_Id: $scope.productID
            }
            //alert(statusboxdata);

            $http.post("", statusboxdata).then(function (res) {
                console.log('Data posted successfully');
                alert("Package has been added")
            },
               function (error) {
                   // Handle error here
                   console.log(error.data);
                   alert(error.data.message);
               });

        }
        else {
            alert($scope.reqField);
            // alert("invalid");
            $scope.errormessage = "Please select Product agreement";
        }


    }
});
