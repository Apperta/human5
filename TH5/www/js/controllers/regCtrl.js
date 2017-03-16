myapp.controller('regCtrl', ['$scope', '$state', '$stateParams','$localStorage',
  function ($scope, $state, $stateParams,$localStorage)
  {
    $scope.badLogin = true;
    
    $scope.selfRateList = ([{mind:0, movement: 0, nutrition: 0, world:0, body:0}, {mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0}]);
    if($localStorage.rateList == null)
    $localStorage.rateList = $scope.selfRateList;
    
    $scope.todos = ([{text:'', type: '', deadline: '', done:false}]);
    if($localStorage.todolist == null)
    $localStorage.todolist = $scope.todos;
    
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
