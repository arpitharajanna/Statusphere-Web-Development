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