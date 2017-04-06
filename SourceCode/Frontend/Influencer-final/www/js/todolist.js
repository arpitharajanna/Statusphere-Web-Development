var appTodolist = angular.module("status_app", []);

appTodolist.controller("status_ctrl", function ($scope, $http,$window) {
    $http.get("/Json/todolist.json").then(function (response) {          //Read json file - todolist.json
        $scope.todolist = response.data.todolist;
    },
            function (error) {
                // Handle error here
                console.log(error.data);
                alert(error.data.message);
            }
    );


    $http.get('/Json/Profile.json').then(function (response) {

        $scope.userinfo = response.data.userinfo;


    });


    $scope.usern = $window.sessionStorage.getItem("user_name");
    $http.get("/Json/statusbox.json").then(function (response) {          //Read json file
        $scope.statusbox = response.data.statusbox;
      
    });




});