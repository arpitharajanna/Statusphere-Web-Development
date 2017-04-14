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



function getSentMessage() {
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
    for (mIndex in notificationMsgObj.messages) {
        //alert(notificationMsgObj.messages[mIndex].email);
        table += "<tr><td><input type='text' value='" + notificationMsgObj.messages[mIndex].email + "' readonly </td>";
        table += "<td><textarea  readonly rows='2' cols='50' >" + notificationMsgObj.messages[mIndex].message + "</textarea></td></tr>"

    }
    table += "</tbody></table>";

    $(table).appendTo("#divSentMagTable");
}



/*
Send Message To the Users: 
*/
//$scope.login = function () {
$scope.login = function () {

    alert("dsadhsakdjhas");
       $scope.errormessage='';
       alert($scope.frmSendMessage.txtEmailID);
                /*var data={
                            username: $scope.formLogin.username,
                            password: $scope.formLogin.password
                        }
        console.log(data.username);
        console.log(data.password);

         $http.post("/login", data).then(function (res) {
                                                     console.log('Data posted successfully');
                                                     //alert(res.data.message);
                                                      $scope.message = res.data.message;
                                                     //$cookies.put('username', data.username);
                                                     localStorage.setItem("username", data.username);
                                                    // localStorage.setItem("email", data.email);
                                                     //alert(data.email);
                                                     //alert(localStorage.getItem("email"));
                                                     window.location.href = "http://localhost:3000/Statustodo.html";
                                                 },
                                                 function(error) {
                                               // Handle error here
                                               console.log(error.data);
                                               $scope.errormessage=error.data.message;
                                               //alert(error.data.message);
                                                    }


                                                 );*/

    }