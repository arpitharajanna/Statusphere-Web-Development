var appTodolist = angular.module("status_app", []);

appTodolist.controller("status_ctrl", function ($scope, $http, $window) {

    $scope.usern = localStorage.getItem("username");
    $http.get("/json/todolist.json").then(function (response) {          //Read json file
        $scope.todolist = response.data.todolist;
    });
    /*,
            function (error) {
                // Handle error here
                console.log(error.data);
                alert(error.data.message);
            }
    );*/
    // alert("hi");
    var data= {username: $scope.usern}
    $http.post("/profile",data).then(function (response) {
        $scope.userinfo = response.data.applicant;
    }, function (error) {

        //$scope.errorm = error.data.message ;
        $scope.profile_err = error.data.message;
        //alert($scope.errorm);
    })
    
    $http.get("/json/statusbox.json").then(function (response) {          //Read json file
        $scope.statusbox = response.data.statusbox;

    });
    /* ,
                                                  function (error) {
                                                      // Handle error here
                                                      console.log(error.data);
                                                      alert(error.data.message);
                                                  });*/

    //$scope.usern = $window.sessionStorage.getItem("user_name");
    $scope.usern = localStorage.getItem("username")
    // alert($scope.usern);

    $scope.openmodal = function (productID) {
        $scope.productID = productID;
        $scope.errormessage = '';
        //  alert(productID);
        $("#Product").modal();
    }



    $scope.someSelected = function (object) {
        if (!object) return false;
        return Object.keys(object).some(function (key) {
            return object[key];
        });
    }

    $scope.doTouched = function () {
        $scope.theForm.subscribe.$setTouched();
    }

    var confirm_message = "Do you want to add this product? If you click on 'OK' button, the product will be added to  your to-do list";
    function confirmDialog(message, onConfirm) {
        // $("addbox").disabled = true;
        var fClose = function () {

            modal.modal("hide");
        };
        var modal = $("#confirmModal");
        modal.modal("show");
        $("#confirmMessage").empty().append(message);
        $("#confirmOk").one('click', onConfirm);
        $("#confirmOk").one('click', fClose);
        $("#confirmCancel").one("click", fClose);

        $("#Product").modal("hide");
    }
    $scope.addtobox = function () {

        confirmDialog(confirm_message, function () {
            //My code to confirmation window

            var statusboxdata = {
                username: $scope.usern,
                product_Id: $scope.productID
            }
        });
    };

    $scope.logout = function (event) {
        localStorage.clear();
        window.location.href = "http://localhost:3000/Startup.html";
    };

    $(document).ready(function () {
        function disableBack() { window.history.forward() }

        window.onload = disableBack();
        window.onpageshow = function (evt) {
            if (evt.persisted) disableBack()
            return "please login";
        }


    });
});



/*  $http.post("", statusboxdata).then(function (res) {
        console.log('Data posted successfully');
        alert("Package has been added")


   },
       function (error) {
           // Handle error here
           console.log(error.data);
           alert(error.data.message);
       });*/
