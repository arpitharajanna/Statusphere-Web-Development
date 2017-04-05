var appTodolist = angular.module("appTodolist", []);
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
