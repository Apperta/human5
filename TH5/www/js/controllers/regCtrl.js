
myapp.controller('regCtrl', ['$scope', '$state', '$stateParams','$localStorage', '$rootScope',
  function ($scope, $state, $stateParams,$localStorage, $rootScope)
  {
    $scope.badLogin = true;
    $localStorage.temp = -1;

    $scope.userDetails = {imageUrl:'', name:'', email:''};
    if($localStorage.userDetails == null)
      $localStorage.userDetails = $scope.userDetails;
    
    if($localStorage.iteratorTodo == null)
      $localStorage.iteratorTodo = 0;

    if($localStorage.userId == null)
      $localStorage.userId = 0;

    
    if($localStorage.synchronize == null)
      $localStorage.synchronize = false;

    $scope.selfRateList = ([{mind:0, movement: 0, nutrition: 0, world:0, body:0}, {mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0}]);
    if($localStorage.rateList == null)
      $localStorage.rateList = $scope.selfRateList;
    else
      $scope.selfRateList = $localStorage.rateList;
    
    $scope.todos = ([]);
    if($localStorage.todolist == null)
      $localStorage.todolist = $scope.todos;
    else
        $scope.todos = $localStorage.todolist;

    $scope.sharedGoals = ([]);
    if($localStorage.sharedGoals == null)
      $localStorage.sharedGoals = $scope.sharedGoals;

    $scope.users = ([{fullname: '', height: '', weight:'', email:'', username:''}]);
    if ($localStorage.userItems == null)
      $localStorage.userItems = $scope.users;

    $scope.YDC  = ([{val:0},{val:0},{val:0},{val:0},{val:0}]);
    if($localStorage.YDC == null)
      $localStorage.YDC = $scope.YDC;
    else
      $scope.YDC = $localStorage.YDC;

    $scope.WEMWBS = ([{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0}]);
    if($localStorage.WEMWBS == null)
      $localStorage.WEMWBS = $scope.WEMWBS;
    else
        $scope.WEMWBS = $localStorage.WEMWBS;


    $localStorage.localId = 0;
    $scope.localLogin = ([{email:'', password:''}]);
    if ($localStorage.localLogin == null)
      $localStorage.localLogin = $scope.localLogin;

    console.log($localStorage.userId);
    if($localStorage.userId != 0 && $localStorage != undefined)
    {
      $.post("http://51.140.39.138:3000/users/verify", {s_id:$localStorage.userId}, 
        function( data ) 
        {
            console.log($localStorage);

          if(data.s_id != -1)
          {
            $state.go('menu.tH5');
          } 
          if($localStorage.synchronize == true)
          {
              return sync(data.id[0].user_id);            
          }
        }
        ,"json");
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
                $localStorage.localLogin.email = $scope.username;
                $localStorage.localLogin.password =$scope.password;
                $scope.badLogin = false;
                $scope.password = "";
              }
            },"json");  
        }
      }

      $scope.registerSubmit = function()
      {
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


      function getDate(date)
      {
        var result = date;
        
        if(date != undefined)
        {
            year = date.substring(11,15);
            var month;
            day  = date.substring(8,10);
            time = date.substring(16,24);

            if(date.substring(4,7) == "Jan")
            month = "01";
            if(date.substring(4,7) == "Feb")
            month = "02";
            if(date.substring(4,7) == "Mar")
            month = "03";
            if(date.substring(4,7) == "Apr")
            month = "04";
            if(date.substring(4,7) == "May")
            month = "05";
            if(date.substring(4,7) == "Jun")
            month = "06";
            if(date.substring(4,7) == "Jul")
            month = "07";
            if(date.substring(4,7) == "Aug")
            month = "08";
            if(date.substring(4,7) == "Sept")
            month = "09";
            if(date.substring(4,7) == "Sep")
            month = "09";
            if(date.substring(4,7) == "Oct")
            month = "10";
            if(date.substring(4,7) == "Nov")
            month = "11";
            if(date.substring(4,7) == "Dec")
            month = "12";

            result = year + "-" + month + "-" + day + " " + time;
        }
        return result;
     }

      function sync(userID)
      {


        //post data onto server after request for the User id
        for (var i = $scope.selfRateList.length - 1; i >= 0; i--) {
          $.post("http://51.140.39.138:3000/sync/th5", 
            {
               user_id    : userID, 
               val1       :$scope.selfRateList[i].mind,
               val2       :$scope.selfRateList[i].movement, 
               val3       :$scope.selfRateList[i].nutrition, 
               val4       :$scope.selfRateList[i].world, 
               val5       :$scope.selfRateList[i].body, 
               date       :getDate($scope.selfRateList[i].date)

             },"json");
        } 

          for (var i = $scope.YDC.length - 1; i >= 0; i--) {
          $.post("http://51.140.39.138:3000/sync/stress", 
            {
               user_id    : userID, 
               val1       :$scope.YDC[i].val,
               date       :getDate($scope.YDC[i].date)

             },"json");
        } 

        for (var i = $scope.WEMWBS.length - 1; i >= 0; i--) {
          $.post("http://51.140.39.138:3000/sync/wemb", 
            {
               user_id    : userID, 
               val1       :$scope.WEMWBS[i].val1,
               val2       :$scope.WEMWBS[i].val2, 
               val3       :$scope.WEMWBS[i].val3, 
               val4       :$scope.WEMWBS[i].val4, 
               val5       :$scope.WEMWBS[i].val5, 
               val6       :$scope.WEMWBS[i].val6, 
               val7       :$scope.WEMWBS[i].val7, 
               date       :getDate($scope.WEMWBS[i].date)
             },"json");
        } 


        for (var i = $scope.todos.length - 1; i >= 0; i--) {
          $.post("http://51.140.39.138:3000/sync/goals", 
            {
               user_id    : userID,  
               goal       :$scope.todos[i].text, 
               deadline   :$scope.todos[i].deadline, 
               category   :$scope.todos[i].type, 
               date       :getDate($scope.todos[i].date)

             },"json");
        console.log($scope.todos[i])

        }
      }

    }])
