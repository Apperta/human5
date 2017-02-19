myapp.controller('regCtrl', ['$scope', '$state', '$stateParams',
  function ($scope, $state, $stateParams)
  {
    $scope.badLogin = true;
    login = function (userVal, passVal)
    {   //TODO make the post to the server with userVal and passVal
        var checkGoodLogin = 1; //post to server and get the response in this

        //todo not always working the second part of the if
        if(checkGoodLogin == 1 && passVal != "")
        {
          return true;
        }
        return false;
    }

  $scope.formSubmit = function()
  {
    console.log($scope.username + " " + $scope.password);
    if(login($scope.username, $scope.password) == true)
    {
      $state.go('home.tH5');
    }
    else
    {
      $scope.badLogin = false;
    }
  }
}])
