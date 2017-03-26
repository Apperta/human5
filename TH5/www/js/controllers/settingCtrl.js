myapp.controller('settingCtrl', ['$scope', '$state' ,'$localStorage' ,'$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $localStorage, $stateParams) {
    $scope.users = ([{fullname: 'Donald', height: '180', weight:'56', email:'donald166@ucl.ac.uk', username:'Donald166'}]);
    if($localStorage.userItems != null){
    	console.log($localStorage.userItems);
    $scope.users = $localStorage.userItems;
	}

//$scope.users = ([{fullname: 'Donald Hanlin', height: '180cm', weight:'67kg', email:'donald166@gmail.com', username:'donald166'}]);

    $scope.fullname = $localStorage.userItems[0].fullname;
	$scope.height = $localStorage.userItems[0].height;
	$scope.weight = $localStorage.userItems[0].weight;
	$scope.email = $localStorage.userItems[0].email;
	$scope.username = $localStorage.userItems[0].username;
	
	$scope.update = function()
	{
		$localStorage.userItems[0].fullname = $scope.fullname ;
		$localStorage.userItems[0].height = $scope.height;
		$localStorage.userItems[0].weight = $scope.weight;
		$localStorage.userItems[0].email = $scope.email;
		$localStorage.userItems[0].username = $scope.username;
		console.log("updated");
		$state.go('menu.th5');
	};

	 $scope.logout = function()
    {
    	$localStorage.userId = 0;
        $state.go('login');
    }

}])