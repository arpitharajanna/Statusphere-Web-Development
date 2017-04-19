// JSON Object for sent notification messages  , This JSON object to be replaced with the one we receive from Mongodb
var notificationMsgObj = {
    "messages": [
                    {
                        "email": "email1@test.com",
                        "message": "Just Text Messages1"
                    },
                    {
                        "email": "email2@test.com",
                        "message": "Just Text Messages2"
                    },
                    {
                        "email": "email3@test.com",
                        "message": "Just Text Messages3"
                    },
                    {
                        "email": "email4@test.com",
                        "message": "Just Text Messages4"
                    },
                    {
                        "email": "email5@test.com",
                        "message": "Just Text Messages5"
                    }
    ]
}



var app = angular.module('myapp', []);
app.controller('myCtrl', function ($scope,$http) {

    //alert("hi sadaskjdjsakdjsakdjsakjdsakj");
    //alert($scope.frmSendMessag.txtEmailID);


    // Function to send message to the influencer
    $scope.sendNotification = function() {

        // Remove history content if present
        $("#divSentMagTable").html("");
        
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
        console.log(data.emailid);
        console.log(data.subject);
        console.log(data.message);

        /*$http.post("/sendNotification", data).then(function(res,status){
                $scope.status = status;
                alert("Status Code" + status);

        });*/

        $http.post("api/messagelist", data).then(function (response, status) {
            $scope.status = status;
            alert("Status Code" + status);

        });
    }

    // Show Notification Message History
    $scope.getNotificationMessage = function (req,res) {
        //alert("Message History");
        // Remove Existing Content from DIV
        $("#divSentMagTable").html("");

        var table = "<table name='tblSentMessage' styel='border:blue'><thead> \
                      <tr>\
                        <td> Email ID</td>\
                        <td> Message  </td>\
                      </tr>\
                    </thead>\
                    <tbody>\
                    ";

        // Get Notification Messages
        $http.get("api/messagelist").then(function (response) {
                $scope.messages = response.data;
                var messages = response.data;
                //alert("MSG" + messages[0].emailid + messages[0].message);
                for (var mIndex =0; mIndex < messages.length; mIndex++) {
                    
                    table += "<tr><td><input type='text' value='" + messages[mIndex].emailid + "' readonly </td>";
                    table += "<td><textarea  readonly rows='2' cols='50' >" + messages[mIndex].message + "</textarea></td></tr>"

                }  
                table += "</tbody></table>";

                $(table).appendTo("#divSentMagTable");

            });
        
        /*for (mIndex in notificationMsgObj.messages) {
            //alert(notificationMsgObj.messages[mIndex].email);
            table += "<tr><td><input type='text' value='" + notificationMsgObj.messages[mIndex].email + "' readonly </td>";
            table += "<td><textarea  readonly rows='2' cols='50' >" + notificationMsgObj.messages[mIndex].message + "</textarea></td></tr>"

        }
        //table += "</tbody></table>";

        //$(table).appendTo("#divSentMagTable");*/
    } 
});

