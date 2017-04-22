myapp.controller('goalsCtrl', ['$scope', '$state','$stateParams','$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $stateParams,$localStorage) {

  $localStorage.iteratorTodo;
  $localStorage.currentTodo;
  
  $scope.todos= [];
  if ($localStorage.todolist != null) {
    $scope.todos = $localStorage.todolist;
  }

  $scope.sharedGoals = [];
  if($localStorage.sharedGoals == null)
    $localStorage.sharedGoals = $scope.sharedGoals;

  $scope.types = ["World","Mind","Body","Nutrition","Movement"];

  $scope.currentIndex;
  var currentTodoGlobal;
  $scope.edit = function(todo, index)
  {
    // console.log("Edit Item: " + todo.text);
    $state.go('menu.setGoals');
    $localStorage.currentTodo = angular.copy($localStorage.todolist[index]);
    $localStorage.iteratorTodo = index;
    // console.log('iteratorTodo:',$localStorage.iteratorTodo);
    // console.log($localStorage.currentTodo);

  };

  $scope.saveTodo = function()
  {
    $localStorage.currentTodo.type = $scope.type;   
    $localStorage.currentTodo.deadline = $('#datePicker').find("input").val();
    // console.log($localStorage.currentTodo.deadline);
    $localStorage.todolist[$localStorage.iteratorTodo] = $localStorage.currentTodo;
    // console.log('local this item:',$localStorage.todolist[$localStorage.iteratorTodo]);
    // console.log("saved type: " + $localStorage.todolist[$localStorage.iteratorTodo].type + ", deadline:" + $localStorage.todolist[$localStorage.iteratorTodo].deadline);
    $scope.todos = $localStorage.todolist;
    $state.go("menu.goals");

  };

  if(localStorage.todolist != null)
  {
    $scope.selected = $localStorage.todolist[$localStorage.iteratorTodo].type;
    $scope.deadline = $localStorage.todolist[$localStorage.iteratorTodo].deadline;
  }


  $scope.removeTodo = function(todo)
  {
    $scope.todos.splice($scope.todos.indexOf(todo),1);
  };



  $scope.addTodo = function()
  {
    if ($scope.todoText && $scope.todoText!= '') 
    {
      $scope.todos.push
      ({
        text:$scope.todoText,
        date: (new Date()).toString(),
        done:false
      });
      $scope.todoText ='';
      $localStorage.todolist = $scope.todos;
      console.log("addTodo: " + $localStorage.todolist);
    }
  };

  $(document).ready(function($)
  {

    $('#datePicker').datepicker
    ({
      orientation: 'top left',
      format: 'mm-dd-yyyy',
      todayHighlight: true
    })

  });


   //Group goals
   $scope.share = function(todo)
   {
      console.log(todo);
      $.post("http://51.140.39.138:3000/shareGoal",
          {
                 goal       :todo.text, 
                 deadline   :todo.deadline, 
                 category   :todo.type, 
                 date       :getDate(todo.date)
           },
           function(data)
           {
              console.log(data);
           }
           ,"json"); 
     }

     
  $.getJSON("http://51.140.39.138:3000/getGoals", function(data)
  {
    for ( i=0; i < data.length; i++)
    {
      if(data[i].category == "undefined")
      {
          data[i].category = ""; 
      }

      if(data[i].deadline == "0000-00-00")
      {
          data[i].deadline = "";
      }
          data[i].deadline = data[i].deadline.substring(0,10);
    }
    $scope.sharedGoals = data;
    $localStorage.sharedGoals = $scope.sharedGoals;
  });

  $scope.tickAndAdd = function(goal)
  {
    $scope.sharedGoals.splice($scope.sharedGoals.indexOf(goal),1);
    $scope.todos.push
    ({
      text:goal.goal,
      done:false,
      type:goal.category,
      deadline:goal.deadline
    });
    $localStorage.todolist = $scope.todos;
  }


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

}])