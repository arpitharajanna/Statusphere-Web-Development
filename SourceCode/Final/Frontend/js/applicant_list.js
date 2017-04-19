var app = angular.module('myapp', []);
app.controller('myCtrl', function ($scope,$http) {

	// Get all applicant information
    $http.get('api/applicantlist').then(function(response) {
            $scope.applicants = response.data; // To be UPdated when there is any data into the database, and all the required fields matches.
        });



    alert(localStorage.getItem("username"));
    //$scope.applicant_info = $scope.applicants[1];
    $scope.getApplicantInfo = function(applicant)
    {
    	//$scope.applicant_info = applicant;
    	alert("sadasjhd" + applicant);
    	//$("#divViewApplicantProfile").modal();

    }

    // Applicant info
    
    /*$scope.getApplicantInfo = function(applicantName)
	{
	alert("hi" + applicantName);

			var applicantPath = "http://localhost:3000/api/applicantlist/" + applicantName;
			$http.get(applicantPath).then(function (response) {
	        	$scope.applicant_info = response.data;
	        	alert("data:" + applicantPath + " : " + response.data.username);
	        	$("#divViewApplicantProfile").modal();

			});
	    	$http.get("http://localhost:3000/api/applicantlist/atuljohn").then(function (response) {
	        	$scope.applicant_info = response.data;

			});
	    
	}*/
});
