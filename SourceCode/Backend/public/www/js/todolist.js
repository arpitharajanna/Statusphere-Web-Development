<<<<<<< HEAD
﻿var appTodolist = angular.module("status_app", []);
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
});
=======
﻿var appTodolist = angular.module("appTodolist", []);
appTodolist.controller("ctrlTodolist", function ($scope, $http) {
    $http.get("/json/todolist.json").then(function (response) {          //Read json file
        $scope.todolist = response.data.todolist;
    },
            function(error) {
                                               // Handle error here
                                               console.log(error.data);
                                               alert(error.data.message);
                                                    }
    );
});
>>>>>>> origin/master
