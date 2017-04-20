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

  $scope.sharedGoals = ([]);
  if($localStorage.sharedGoals == null)
    $localStorage.sharedGoals = $scope.sharedGoals;

  $scope.types = [
  "World",
  "Mind",
  "Body",
  "Nutrition",
  "Movement"
  ];

  $scope.currentIndex;
  var currentTodoGlobal;
  $scope.edit = function(todo, index){
    console.log("Edit Item: " + todo.text);
    $state.go('menu.setGoals');
    $localStorage.currentTodo = angular.copy($localStorage.todolist[index]);
    $localStorage.iteratorTodo = index;
    console.log('iteratorTodo:',$localStorage.iteratorTodo);
    console.log($localStorage.currentTodo);


  };

  $scope.saveTodo = function(){
    $localStorage.currentTodo.type = $scope.type;   
    $localStorage.currentTodo.deadline = $('#datePicker').find("input").val();
    console.log($localStorage.currentTodo.deadline);
    $localStorage.todolist[$localStorage.iteratorTodo] = $localStorage.currentTodo;
    console.log('local this item:',$localStorage.todolist[$localStorage.iteratorTodo]);
    console.log("saved type: " + $localStorage.todolist[$localStorage.iteratorTodo].type + ", deadline:" + $localStorage.todolist[$localStorage.iteratorTodo].deadline);
    $scope.todos = $localStorage.todolist;
    $state.go("menu.goals");



  };
  if(localStorage.todolist != null)
  {
    $scope.selected = $localStorage.todolist[$localStorage.iteratorTodo].type;
    $scope.deadline = $localStorage.todolist[$localStorage.iteratorTodo].deadline;
  }
  $scope.removeTodo = function(todo){
    $scope.todos.splice($scope.todos.indexOf(todo),1);
  };



  $scope.addTodo = function(){
    if ($scope.todoText && $scope.todoText!= '') {
      $scope.todos.push({
        text:$scope.todoText,
        done:false
      });
      $scope.todoText ='';
      $localStorage.todolist = $scope.todos;
      console.log("addTodo: " + $localStorage.todolist);
    }
  };

  $(document).ready(function($) {
    $('#datePicker')
    .datepicker({
      orientation: 'top left',
      format: 'mm-dd-yyyy',
      todayHighlight: true
    })
  });


   //Group goals
   $scope.share = function(todo){
    $.post("http://51.140.39.138:3000/sharedGoals/verify", {goal:todo}, 
        function( data ) 
        {
          
        },"json"); 
   }

   $scope.tickAndAdd = function(goal){
    $scope.sharedGoals.splice($scope.sharedGoals.indexOf(goal),1);
    $scope.sharedGoals.push({
      text:$scope.goal.text,
      done:false,
      type:$scope.goal.type,
      deadline:$scope.goal.deadline
    });
    $localStorage.sharedGoals = $scope.sharedGoals;
  }

}])