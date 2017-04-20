
myapp.controller('regCtrl', ['$scope', '$state', '$stateParams','$localStorage', '$rootScope',
  function ($scope, $state, $stateParams,$localStorage, $rootScope)
  {
    $scope.badLogin = true;

    $localStorage.temp = -1;

    if($localStorage.iteratorTodo == null)
      $localStorage.iteratorTodo = 0;

    if($localStorage.userId == null)
      $localStorage.userId = 0;

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


    $localStorage.localId = 0;
    $scope.localLogin = ([{email:'', password:''}]);
    if ($localStorage.localLogin == null)
      $localStorage.localLogin = $scope.localLogin;

    console.log($localStorage.userId);
    if($localStorage.userId != 0)
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
          //check if there is login information on user's device
          if ($localStorage.localLogin[0].email == $scope.username) {
            if ($localStorage.localLogin[0].password == $scope.password) {
              console.log("heyy");
              $scope.username = "";
              $scope.password = "";
              $state.go('menu.tH5');
            } else {
              $scope.badLogin = false;
              $scope.password = "";
            }
          }
          console.log($localStorage.localLogin[0]);


          $.post("http://51.140.39.138:3000/users/login", { email: $scope.username, password:$scope.password}, 
            function( data ) 
            {
              console.log(data.s_id);
              if (data.s_id != -1)
              {
                $localStorage.userId = data.s_id;
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
      //local register
      
        // $localStorage.localLogin.push({
        //   email:$scope.username,
        //   password:$scope.password
        // });
        $localStorage.localLogin[0].email = $scope.username;
        $localStorage.localLogin[0].password = $scope.password;

        console.log($localStorage.localLogin[0]);

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
      $rootScope.$on('event:social-sign-in-success', function(event, userDetails)
      {
        console.log(userDetails);
        $localStorage.userDetails = userDetails;

        $state.go('menu.tH5');
      });



      $scope.sync = function(){
        $.post("http://51.140.39.138:3000/users/verify", {email:$localStorage.localLogin[0].email}, 
          function( data ) 
          {
            if(data.email != "")
            {
              
            }
          },"json"); 




        //post data onto server after request for the User id
        for (var i = $localStorage.selfRateList.length - 1; i >= 0; i--) {
          $.post("http://51.140.39.138:3000/sync/th5", {mind:$localStorage.selfRateList[i].mind, movement:$localStorage.selfRateList[i].movement, nutrition:$localStorage.selfRateList[i].nutrition, world:$localStorage.selfRateList[i].world, body:$localStorage.selfRateList[i].body}, 
            function( data ) 
            {

            },"json");
        } 
        for (var i = $localStorage.YDC.length - 1; i >= 0; i--) {
          $.post("http://51.140.39.138:3000/sync/stress", {val:$localStorage.YDC[i]}, 
            function( data ) 
            {

            },"json");
        } 
        for (var i = $localStorage.WEMWBS.length - 1; i >= 0; i--) {
          $.post("http://51.140.39.138:3000/sync/wemb", {val1:$localStorage.WEMWBS[i].val1,val2:$localStorage.WEMWBS[i].val2,val3:$localStorage.WEMWBS[i].val3,val4:$localStorage.WEMWBS[i].val4,val5:$localStorage.WEMWBS[i].val5,val6:$localStorage.WEMWBS[i].val6,val7:$localStorage.WEMWBS[i].val7}, 
            function( data ) 
            {

            },"json");
        } 
        for (var i = $localStorage.todolist.length - 1; i >= 0; i--) {
          $.post("http://51.140.39.138:3000/sync/goals", {text:$localStorage.todolist[i].text, done:$localStorage.todolist[i].done, type:$localStorage.todolist[i].type, deadline:$localStorage.todolist[i].deadline}, 
            function( data ) 
            {

            },"json");
        } 
      }

    }])
