myapp.controller('settingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $localStorage, $stateParams) {
	$scope.username = "Donald Hanlin";
	$localStorage.username = $scope.username;
	$localStorage.users = ([{usrname: 'Donald Hanlin', height: ''}])
	$scope.editHeight = function(){
		$localStorage.height = $scope.height
	}

}])