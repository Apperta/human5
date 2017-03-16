myapp.controller('goalsCtrl', ['$scope', '$state','$stateParams','$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state,  $stateParams,$localStorage) {
   $scope.todos = ([{text:'Hiking', type: 'Movement', deadline: '09 Sep 2017', done:false},         
     {text: 'Afternoon tea', type: 'World', deadline: '10 Oct 2017',done:false}]);
      // console.log($scope.todos[0]);
      if($localStorage.todolist!= null)
      $scope.todos = $localStorage.todolist;
    console.log($localStorage.todolist);

   $localStorage.todolist = $scope.todos;
       console.log($scope.todos);
       console.log($localStorage.todolist);

    $scope.getTotalTodos = function () {
    	    console.log($scope.todos);
    return $scope.todos.length;

   };
 	$scope.addTodo = function () {
    $scope.todos.push({
    	text:$scope.formTodoText,
    	done:false
    });
   
    $scope.formTodoText = '';

    $localStorage.todolist = $scope.todos;
       console.log($localStorage.todolist);

  };
 
   console.log($localStorage.todolist);

    $scope.removeItem = function(index){
    $scope.todos.splice(index, 1);
    $localStorage.todolist = $scope.todos;
  }

 	$localStorage.index = {};
    $scope.goSetGoals = function(index){
    	$state.go('home.setGoals', {index:index});
    	$localStorage.index = index;
    }
    $scope.showCato = function(category){
    	console.log(category);
    	$localStorage.todolist[$localStorage.index].category = category;
    	$scope.category = $localStorage.todolist[$localStorage.index].category;

    }

    $scope.addDetail = function(category, date){
    	$scope.todos.push({type: $scope.category, deadline: $scope.date});
    	// console.log(todos[0].category);
    	$state.go('home.goals');
    }

    $("#myCalendar-1").ionCalendar({
    	lang: "en",
    	sundayFirst: false,
    	years: "80",
    	format: "DD.MM.YYYY",
    	onClick: function(date){
    	console.log(date);
    	$localStorage.todolist[$localStorage.index].date = date;
    	$scope.date = $localStorage.todolist[$localStorage.index].date;


    }
    });
    $("#myDatePicker-1").ionDatePicker();
}])