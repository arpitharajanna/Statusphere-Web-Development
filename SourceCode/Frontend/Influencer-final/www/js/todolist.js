var appTodolist = angular.module("status_app", []);
appTodolist.controller("status_ctrl", function ($scope, $http) {

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
});
