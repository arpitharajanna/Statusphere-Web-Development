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
    var confirm_message = "Do you want to add this product?";
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
    }

    $("#confirmModal").on('hidden', function () {
        $("successModal").modal("show");
    })
    $scope.addtobox = function () {

        confirmDialog(confirm_message, function () {        
            //My code to add product
           alert("add product");

           var statusboxdata = {
                username: $scope.username,
                product_Id: $scope.productID
            }
           

         /*  $http.post("", statusboxdata).then(function (res) {
                console.log('Data posted successfully');
                alert("Package has been added")


            },
               function (error) {
                   // Handle error here
                   console.log(error.data);
                   alert(error.data.message);
               });*/
        });            

        }       

    
});

