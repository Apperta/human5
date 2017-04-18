
myapp.controller('regCtrl', ['$scope', '$state', '$stateParams','$localStorage', '$rootScope',
  function ($scope, $state, $stateParams,$localStorage, $rootScope)
  {
    $scope.badLogin = true;

    if($localStorage.userId != -1)
    {
      $.post("http://51.140.39.138:3000/users/verify", {s_id:$localStorage.userId}, 
          function( data ) 
          {
              if(data.s_id != -1)
            {
                $localStorage.userId = data.s_id;
                $state.go('menu.tH5');
            }
          },"json"); 
    }

    $localStorage.temp = -1;

    if($localStorage.iteratorTodo == null)
      $localStorage.iteratorTodo = 0;

    if($localStorage.userId == null)
        $localStorage.userId = -1;

    $scope.selfRateList = ([{mind:0, movement: 0, nutrition: 0, world:0, body:0}, {mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0}]);
    if($localStorage.rateList == null)
        $localStorage.rateList = $scope.selfRateList;
    
    $scope.todos = ([]);
    if($localStorage.todolist == null)
        $localStorage.todolist = $scope.todos;

    $scope.users = ([{fullname: '', height: '', weight:'', email:'', username:''}]);
    if ($localStorage.userItems == null)
        $localStorage.userItems = $scope.users;

    $scope.YDC  = ([{val:0},{val:0},{val:0},{val:0},{val:0}]);
    if($localStorage.YDC == null)
      $localStorage.YDC = $scope.YDC;

     $scope.WEMWBS = ([{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0}]);
    if($localStorage.WEMWBS == null)
      $localStorage.WEMWBS = $scope.WEMWBS;

    if($localStorage.userId != -1)
    {
      $.post("http://51.140.39.138:3000/users/verify", {s_id:$localStorage.userId}, 
          function( data ) 
          {
              if(data.s_id != -1)
            {
                $localStorage.userId = data.s_id;
                $state.go('menu.tH5');
            }
          },"json"); 
    }

  


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
                $localStorage.userId = data.s_id;
                console.log("MUIE!");
                $state.go('menu.tH5');
            }
            if (data.s_id == -1)
            {
              $localStorage.userId = data.s_id;
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


  /* Facebook login */
  $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
    console.log(userDetails);
    $localStorage.userDetails = userDetails;

    $state.go('menu.goals');
  });



}])
