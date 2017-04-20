var app = angular.module("appProfile_influ", []);
app.controller('ctrlProfile_influ', function ($scope, $http, $window) {
    $scope.usern =localStorage.getItem("username");
    var data = { username: $scope.usern }
    $http.post("/influencer_profile", data).then(function (response) {
        $scope.userinfo = response.data.influencer;
      
      //  console.log(userinfo);
    }, function (error) {

        //$scope.errorm = error.data.message ;
        $scope.profile_err = error.data.message;
        //alert($scope.errorm);
    })

    $http.get('/Json/Countries.json').then(function (response) {

        $scope.countries = response.data.countries;
    });
    $http.get('/Json/States.json').then(function (response) {

        $scope.states = response.data.states;
    });
    $scope.GetSelectedCountry = function () {

        $scope.strCountry = $scope.selectCountry;
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
    $scope.updateProfile = function () {
        var checked = $('.form-check-input:checked').map(function () {
            return this.value;
        }).get();
        if (checked.length) {
            alert(checked);
            $scope.selected = checked;
            //categories: checked;
        } else {
            console.log('null');
        }

        $scope.selected;
        var data = {
            image_url: $scope.myFile,
            firstname: $scope.fn,
            lastname: $scope.ln,
            dob: $scope.dob,
            gender: $scope.sex,
            instagram_url: $scope.insta,
            facebook_url: $scope.fb,
            twitter_url: $scope.tweet,
            snapchat_url: $scope.sc,
            youtubechannel: $scope.yc,
            Blog: $scope.blog,
            AddressLine1: $scope.addr1,
            AddressLine2: $scope.addr2,
            Country: $scope.selectCountry.name,
            State: $scope.selectstate.name,
            City: $scope.city,
            ZIPCode: $scope.zip,
            mob: $scope.phno,
            username: $scope.usern,

            categories: $scope.selected


        }
        $http.post("/editProfile", data).then(function (response) {
            console.log('Data posted successfully');
            $scope.success = response.data.message;
            // alert($scope.success);
            //code added by leena for popup 			  		

            alert("success");
            


            //code end by leena for popup


            //window.location.href = "http://localhost:3000/Startup.html";

        },
                            function (error) {

                                //$scope.errorm = error.data.message ;
                                alert(error.data.message);
                                //alert($scope.errorm);
                            }
                )

    }

    /* code added by leena for popup */
    // var confirm_message = "Do you want to add this product? If you click on 'OK' button, the product will be added to  your to-do list";
    function confirmDialog(message, onConfirm) {
        // $("addbox").disabled = true;
        var fClose = function () {

            modal.modal("hide");
        };
        var modal = $("#confirmPopup");
        modal.modal("show");
        $("#confirmMessage").empty().append(message);
        $("#confirmOk").one('click', onConfirm);
        $("#confirmOk").one('click', fClose);
        // $("#confirmCancel").one("click", fClose);


    }

    /* code end by leen */

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