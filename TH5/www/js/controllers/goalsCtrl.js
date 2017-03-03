myapp.controller('goalsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  
   $scope.todos = [
     {text:'Hiking', done:false},         
     {text: 'Afternoon tea', done:false}
   ];

    $scope.getTotalTodos = function () {
    return $scope.todos.length;
   };
 	$scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
    // $scope.clearCompleted = function () {
    //     $scope.todos = _.filter($scope.todos, function(todo){
    //         return !todo.done;
    //     });
    // };

    $scope.removeItem = function(index){
    $scope.todos.splice(index, 1);
  }
}])