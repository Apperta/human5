myapp.controller('settingCtrl', ['$scope', '$state' ,'$localStorage' ,'$stateParams', '$rootScope', 'socialLoginService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $localStorage, $stateParams, $rootScope, socialLoginService) {

	if($localStorage.userDetails != null)
	{
		$scope.profilePic = $localStorage.userDetails.imageUrl;
		$scope.fullname   = $localStorage.userDetails.name;		
	}
	if($scope.profilePic == "")
	{
		$scope.profilePic = "../img/profilePic.png";
	}
	
	$scope.users = [{fullname: '', height: '', weight:'', email:'', username:''}];
	if($localStorage.userItems != null){
		$scope.users = $localStorage.userItems;
	}

	$scope.users[0].fullname = $localStorage.fullname;
	if ($localStorage.userDetails.email != "") {
		$scope.users[0].email = $localStorage.userDetails.email;

	}else{
		$scope.users[0].email = $localStorage.localLogin[0].email;
	}


	$scope.update = function()
	{
		if ($scope.users[0].height && $scope.users[0].height != '' ) 
		{
			$localStorage.userItems[0].height = $scope.users[0].height;

		}
		if ($scope.users[0].weight && $scope.users[0].weight != '' ) 
		{
			$localStorage.userItems[0].weight = $scope.users[0].weight;

		}
		$scope.users= $localStorage.userItems;
	};

	if ($localStorage.userItems[0].height != '' || $localStorage.userItems[0].weight != '') 
	{
		$scope.users[0].height = $localStorage.userItems[0].height;
		$scope.users[0].weight = $localStorage.userItems[0].weight;
	}



	$scope.logout = function()
	{


		$localStorage.userId = 0;
		$localStorage.userItems = [{fullname: '', height: '', weight:'', email:'', username:''}];
		$localStorage.userDetails.imageUrl = "";
		$localStorage.userDetails.name = "";
		$localStorage.userDetails.email = "";

    	// socialLoginService.logout();
    	// FB.logout(function(res){ console.log(res); });
    	
    	FB.getLoginStatus(function(response) 
    	{
    		if (response && response.status === 'connected') 
    		{
    			FB.logout(function(response) 
    			{
    				console.log(response);
    				document.location.reload();
    			});
    		}
    	});


    	$state.go('login');
    }


    $rootScope.$on('event:social-sign-out-success', function(event, logoutStatus)
    {
    	console.log(logoutStatus);
    })
}])