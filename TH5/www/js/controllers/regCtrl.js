myapp.controller('regCtrl', ['$scope', '$state', '$stateParams','$localStorage',
  function ($scope, $state, $stateParams,$localStorage)
  {
    $scope.badLogin = true;
    
    $scope.selfRateList = ([{mind:0, movement: 0, nutrition: 0, world:0, body:0}, {mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0}]);
    if($localStorage.rateList == null)
    $localStorage.rateList = $scope.selfRateList;
    
    $scope.todos = ([{text:'', type: '', deadline: '', done:true}]);
    if($localStorage.todolist == null)
    $localStorage.todolist = $scope.todos;


  $scope.loginSubmit = function()
  {
    console.log({ email: $scope.username, password:$scope.password});
    if(!$scope.username.includes("@"))
    {
      $scope.badLogin = false;
    }
    else if(!$scope.username.includes("."))
    {
      $scope.badLogin = false;
    }
    else
    {
          $scope.badLogin = true;
          $.post("http://51.140.39.138:3000/users/login", { email: $scope.username, password:$scope.password}, 
          function( data ) 
          {
            console.log(data.s_id);
             if (data.s_id != -1)
            {
                $state.go('home.tH5');
            }
            if (data.s_id == -1)
            {
              $scope.badLogin = false;
              $scope.password = "";
            }
          },"json");  
    }
 }

  $scope.registerSubmit = function()
  {
    $.post("http://51.140.39.138:3000/users/register", { name:$scope.name, email: $scope.username, password:$scope.password}, 
      function( data ) 
      {
        console.log(data.s_id);
         if (data.s_id != -1)
        {
            $state.go('login');
        }
      },"json");
 }

}])
