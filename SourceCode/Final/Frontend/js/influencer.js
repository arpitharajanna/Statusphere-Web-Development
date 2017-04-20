/*
Script Name: influencer.js
Description: 1. Used to populate data of all influencers from database 
             2. Functionalities for sending notification
             3. View Profile     
*/

var app = angular.module('influencerApp', []);
app.controller('influencerCtrl', function ($scope,$http) {

    //$scope.names =  influencerListObj;
    
    
    $http.get('api/influencerlist').then(function(response) {
            $scope.influencers = response.data;
        });

    $scope.openNotificationModal = function( emailid)
    {
        //alert("Open Modal " + emailid);
        $("#divNotificationEmailID").html("");

        document.getElementById('txtEmailID').value = emailid;
        //var modalBody = "<input type='text' id='txtEmailID' ng-model='frmSendMessage.emailID' class='form-control' value=\" " + emailid + " \" />";

        //console.log("input: " + modalBody);
        //$(modalBody).appendTo("#divNotificationEmailID");
        $("#divSendMessage").modal('toggle');

        
    }
    
    $scope.sendNotification = function() {

        // Get Email id
        emailID = $scope.frmSendMessage.emailID;
        // Get Subject of Notification Message
        emailSub = $scope.frmSendMessage.emailSubject;
        // Get NOtification Message
        notificationMsg = $scope.frmSendMessage.notificationMsg;

        //alert("Email:" + emailID + "\nSUB:" + emailSub + "\nnotificationMsg:" + notificationMsg);

        // Post the data to the server
        $scope.errormessage='';
        var data={
                    emailid: $scope.frmSendMessage.emailID,
                    subject: $scope.frmSendMessage.emailSubject,
                    message: $scope.frmSendMessage.notificationMsg
                };
        
        //alert("DATA:" + data.emailid + data.subject + data.message);
        /*console.log(data.emailid);
        console.log(data.subject);
        console.log(data.message);*/

        $http.post("api/messagelist", data).then(function (response, status) {
            $scope.status = status;
            //alert("Status Code" + status);
            // On success perform the following task
            $("#divSendMessage").modal('toggle');
            // Call confirm dialog message on success of the status code
            var confirm_message="Message Sent sucessfully!!";
            confirmDialog(confirm_message, function () {})

        });
    }


    /* Popup Window to show success message */
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

});
