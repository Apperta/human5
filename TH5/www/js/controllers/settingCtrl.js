myapp.controller('settingCtrl', ['$scope', '$state' ,'$localStorage' ,'$stateParams', '$rootScope', 'socialLoginService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $localStorage, $stateParams, $rootScope, socialLoginService) {
    	console.log($localStorage.profilePicUrl);
	$scope.profilePic = $localStorage.userDetails.imageUrl;
	$scope.fullname = $localStorage.userDetails.name;
//$scope.users = ([{fullname: 'Donald Hanlin', height: '180cm', weight:'67kg', email:'donald166@gmail.com', username:'donald166'}]);
	$scope.users = [{fullname: '', height: '', weight:'', email:'', username:''}];
    if($localStorage.userItems != null){
    	console.log('local userItems not null');
    $scope.users = $localStorage.userItems;
	}
	$scope.users[0].fullname = $localStorage.fullname;
	$scope.update = function()
	{
		console.log($scope.weight);
		if ($scope.height && $scope.height != '' ) {
			$localStorage.userItems[0].height = $scope.users[0].height;

		}
		if ($scope.weight && $scope.weight != '' ) {
			$localStorage.userItems[0].weight = $scope.users[0].weight;

		}
		$scope.users= $localStorage.userItems;
	};
	if ($localStorage.userItems[0].height != '' || $localStorage.userItems[0].weight != '') {
		$scope.users[0].height = $localStorage.userItems[0].height;
		$scope.users[0].weight = $localStorage.userItems[0].weight;
		$scope.users[0].email = $localStorage.userDetails.email;
	}


	 $scope.logout = function()
    {
    	$localStorage.userId = 0;
    	// socialLoginService.logout();
    	FB.logout(function(res){ console.log(res); });
        $state.go('login');
    }

	$rootScope.$on('event:social-sign-out-success', function(event, logoutStatus){
    	console.log(logoutStatus);
	})
}])