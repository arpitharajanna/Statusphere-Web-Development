// JSON Object for sent notification messages  , This JSON object to be replaced with the one we receive from Mongodb
var appliacntListObj = {
    "information": [
                    {
                        "FirstName": "Elena",
                        "LastName": "Desuza",
                        "InstagramID": "elina_desuza",
                        "InstagramFollowers": "10",
                        "Age": "22",
                        "Gender": "Female",
                        "DateApplied": "01/02/2017",
                        "ApplicantInformation": "dsaasfdfdsaffds"
                    },
                    {
                        
                        "FirstName": "Elena",
                        "LastName": "Desuza",
                        "InstagramID": "elina_desuza",
                        "InstagramFollowers": "10",
                        "Age": "22",
                        "Gender": "Female",
                        "DateApplied": "01/02/2017",
                        "ApplicantInformation": "dsaasfdfdsaffds"
                    },
                    {
                        
                        "FirstName": "Tom",
                        "LastName": "D",
                        "InstagramID": "tom1234",
                        "InstagramFollowers": "11",
                        "Age": "29",
                        "Gender": "Male",
                        "DateApplied": "11/03/2017",
                        "ApplicantInformation": "dsaasfdfddsadds"
                    },
                    {
                        
                        "FirstName": "Elena",
                        "LastName": "Desuza",
                        "InstagramID": "elina_desuza",
                        "InstagramFollowers": "10",
                        "Age": "22",
                        "Gender": "Female",
                       "DateApplied": "01/02/2017",
                        "ApplicantInformation": "dsaasfdfdsaffds"
                    },
                    {
                        
                        "FirstName": "Carol",
                        "LastName": "Thomas",
                        "InstagramID": "carol",
                        "InstagramFollowers": "13",
                        "Age": "25",
                        "Gender": "Female",
                        "DateApplied": "01/02/2017",
                        "ApplicantInformation": "dsaasfdfdsaffds"
                    }
    ]
}
function getApplicantList() {
    // Remove Existing Content from DIV
    $("#divApplicantList").html("");

    var table = "<table name='tblInfluencerList' styel='border:blue'><thead> \
                  <tr>\
                    <td align='center'><b>First Name</b></td>\
                    <td align='center'><b>Last Name</b></td>\
                    <td align='center'><b>Instagram ID</b></td>\
                    <td align='center'><b>Instagram Followers</b></td>\
                    <td align='center'><b>Age</b></td>\
                    <td align='center'><b>Gender</b></td>\
                    <td align='center'><b>Date Applied</b></td>\
                    <td align='center'><b>Applicant Information</b></td>\
                  </tr>\
                </thead>\
                <tbody>\
                ";
    for (mIndex in appliacntListObj.information) {
        //alert(notificationMsgObj.messages[mIndex].email);
        table += "<tr><td><input type='text' text-align='center' value='" + appliacntListObj.information[mIndex].FirstName + "' readonly </td>";
        table += "<td><input  type='text'  align='center' value='" + appliacntListObj.information[mIndex].LastName + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + appliacntListObj.information[mIndex].InstagramID + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + appliacntListObj.information[mIndex].InstagramFollowers + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + appliacntListObj.information[mIndex].Age + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + appliacntListObj.information[mIndex].Gender + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + appliacntListObj.information[mIndex].DateApplied + "' readonly</td>";
        table += "<td><input  type='text'  align='center' value='" + appliacntListObj.information[mIndex].ApplicantInformation + "' readonly</td>";
        table += "</tr>";

    }
    table += "</tbody></table>";

    $(table).appendTo("#divApplicantList");
}
