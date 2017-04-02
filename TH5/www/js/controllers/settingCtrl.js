myapp.controller('settingCtrl', ['$scope', '$state' ,'$localStorage' ,'$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $localStorage, $stateParams) {
    
//$scope.users = ([{fullname: 'Donald Hanlin', height: '180cm', weight:'67kg', email:'donald166@gmail.com', username:'donald166'}]);
	$scope.users = [{fullname: '', height: '', weight:'', email:'', username:''}];
    if($localStorage.userItems != null){
    	console.log('local userItems not null');
    $scope.users = $localStorage.userItems;
	}

	$scope.update = function()
	{
		console.log($scope.weight);
		if ($scope.height && $scope.height != '' ) {
			$localStorage.userItems[0].height = $scope.users[0].height;

		}
		if ($scope.weight && $scope.weight != '' ) {
			$localStorage.userItems[0].weight = $scope.users[0].weight;

		}
		console.log('local: ',$localStorage.userItems[0]);
		$scope.users= $localStorage.userItems;
		console.log('updated scope',$scope.users[0]);

	};
	if ($localStorage.userItems[0].height != '' || $localStorage.userItems[0].weight != '') {
		$scope.users[0].height = $localStorage.userItems[0].height;
		$scope.users[0].weight = $localStorage.userItems[0].weight;
		$scope.users[0].email = $localStorage.userItems[0].email;
		$scope.users[0].username = $localStorage.userItems[0].username;
	}



	 $scope.logout = function()
    {
    	$localStorage.userId = 0;
        $state.go('login');
    }

}])