var appTodolist = angular.module("appTodolist", []);
appTodolist.controller("ctrlTodolist", function ($scope, $http) {
    $http.get("/json/todolist.json").then(function (response) {          //Read json file
        $scope.todolist = response.data.todolist;
    });
});