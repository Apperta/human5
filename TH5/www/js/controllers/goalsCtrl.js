myapp.controller('goalsCtrl', ['$scope', '$state','$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $localStorage, $stateParams) {

   $scope.todos = [
     {text:'Hiking', type: 'Movement', deadline: '09 Sep 2017', done:false},         
     {text: 'Afternoon tea', type: 'World', deadline: '10 Oct 2017',done:false}
   ];

    $scope.getTotalTodos = function () {
    return $scope.todos.length;
   };
 	$scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';

  };
 
   //  $localStorage.test = "kkk";
   // console.log($localStorage.test);

    $scope.removeItem = function(index){
    $scope.todos.splice(index, 1);
  }
    $scope.clearCompleted = function(){
    	var i = $scope.todos.length;
    	//reversed loop
    	while(i--){
    		var todo = $scope.todos[i];
    		//if todo is checked, remove
    		if (todo.Checked) {
    			$scope.todos.splice(i,1);
    		}
    	}
    }

    $scope.goSetGoals = function(index){
    	$state.go('home.setGoals', {index:index});
    }
    $scope.showCato = function(catogory){
    	console.log(catogory);
    }
    $scope.showData = function(date){
    	console.log(date);
    }
    $scope.addDetail = function(catogory, date){
    	$scope.todos.push({type: $scope.catogory, deadline: $scope.date});
    	// console.log(todos[0].catogory);
    	$state.go('home.goals');
    }

    $("#myCalendar-1").ionCalendar({
    	lang: "en",
    	sundayFirst: false,
    	years: "80",
    	format: "DD.MM.YYYY",
    	onClick: function(date){
    	console.log(date);
    }
    });
    $("#myDatePicker-1").ionDatePicker();
}])