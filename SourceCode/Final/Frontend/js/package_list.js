// JSON Object for sent notification messages  , This JSON object to be replaced with the one we receive from Mongodb
var app = angular.module('myapp', []);
app.controller('myCtrl', function ($scope) {

    $scope.information = [

  {

      "PackageName": "Elena",
      "QuantityAccepted": "2",
      "QuantityAvailable": "10",
      "CreatedDate": "01/02/2017",
      "DateDue": "15/01/2017",
      "PackageStatus": "shipped",
      "PackageInfo": "info on product"
  },
                    {

                        "PackageName": "Elena",
                        "QuantityAccepted": "7",
                        "QuantityAvailable": "10",
                        "CreatedDate": "01/02/2017",
                        "DateDue": "15/01/2017",
                        "PackageStatus": "shipped",
                        "PackageInfo": "info on product"
                    },
                    {

                        "PackageName": "Elena",
                        "QuantityAccepted": "5",
                        "QuantityAvailable": "10",
                        "CreatedDate": "01/02/2017",
                        "DateDue": "15/01/2017",
                        "PackageStatus": "shipped",
                        "PackageInfo": "info on product"
                    },
                    {

                        "PackageName": "Nick",
                        "QuantityAccepted": "3",
                        "QuantityAvailable": "10",
                        "CreatedDate": "01/02/2017",
                        "DateDue": "15/01/2017",
                        "PackageStatus": "shipped",
                        "PackageInfo": "info on product"
                    },
                    {

                        "PackageName": "Carol",
                        "QuantityAccepted": "3",
                        "QuantityAvailable": "10",
                        "CreatedDate": "01/02/2017",
                        "DateDue": "15/01/2017",
                        "PackageStatus": "shipped",
                        "PackageInfo": "info on product"
                    }
    ]
});






/*{function getPackageList() {
    // Remove Existing Content from DIV
    $("#divPackageList").html("");

    var table = "<table name='tblInfluencerList' styel='border:blue'><thead> \
                  <tr>\
                    <td align='center'><b>First Name</b></td>\
                    <td align='center'><b>Last Name</b></td>\
                    <td align='center'><b>Quantity Accepted</b></td>\
                    <td align='center'><b>Quantity Available</b></td>\
                    <td align='center'><b>Created Date</b></td>\
                    <td align='center'><b>Due Date</b></td>\
                    <td align='center'><b>Package Status</b></td>\
                    <td align='center'><b>Package Info</b></td>\
                  </tr>\
                </thead>\
                <tbody>\
                ";
    for (mIndex in influencerListObj.information) {
        //alert(notificationMsgObj.messages[mIndex].email);
        table += "<tr><td><input type='text' align='center' value='" + influencerListObj.information[mIndex].FirstName + "' readonly </td>";
        table += "<td><input  type='text'  align='center' value='" + influencerListObj.information[mIndex].LastName + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + influencerListObj.information[mIndex].QuantityAccepted + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + influencerListObj.information[mIndex].QuantityAvailable + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + influencerListObj.information[mIndex].CreatedDate + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + influencerListObj.information[mIndex].DueDate + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + influencerListObj.information[mIndex].PackageStatus + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + influencerListObj.information[mIndex].PackageInfo + "' readonly</td>";
        table += "</tr>";

    }
    table += "</tbody></table>";

    $(table).appendTo("#divPackageList");
}
}*/
