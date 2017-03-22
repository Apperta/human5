myapp.controller('goalsCtrl', ['$scope', '$state','$stateParams','$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $stateParams,$localStorage) {

  $localStorage.iteratorTodo;
  $localStorage.currentTodo;
  
  $scope.todos= [
     {text:'', type: '', deadline: '', done:false},         
     ];
  if ($localStorage.todolist != null) {
    $scope.todos = $localStorage.todolist;
  }
  $scope.data = {
    showDelete: false
  };

  // $scope.options = [
  // {name:'Mind'},
  // {name:'Body'},
  // {name:'Movement'},
  // {name:'Nutrition'},
  // {name:'World'}
  // ];

  $scope.currentIndex;
  var currentTodoGlobal;
  $scope.edit = function(todo, index){
    console.log("Edit Item: " + todo.text);
    $state.go('home.setGoals');
    $localStorage.currentTodo = angular.copy($localStorage.todolist[index]);
    $localStorage.iteratorTodo = index;
    console.log('iteratorTodo:',$localStorage.iteratorTodo);
    console.log($localStorage.currentTodo);


  };
      console.log('iteratorTodo:',$localStorage.iteratorTodo);

   // $scope.selectedCate = $localStorage.todolist[$localStorage.interatorTodo].type;
   // $scope.selectedDate = $localStorage.todolist[$localStorage.interatorTodo].deadline;
  $scope.saveTodo = function(){
    console.log($localStorage.iteratorTodo);
    console.log($localStorage.currentTodo.type);
    $localStorage.currentTodo.type = $scope.category;
    $localStorage.currentTodo.deadline = $scope.deadline;
   
   
    console.log('currentTodo:',$localStorage.currentTodo)

    $localStorage.todolist[$localStorage.iteratorTodo] = $localStorage.currentTodo;
    $scope.todos = $localStorage.todolist;
    console.log('this item:',$localStorage.todolist[$localStorage.iteratorTodo])
    console.log("saved type: " + $localStorage.todolist[$localStorage.iteratorTodo].type);
    $localStorage.currentTodo = {};
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
            format: 'mm/dd/yyyy',
            orientation: 'auto bottom',
            todayHighlight: true
        })
        .on('changeDate', function(e) {
            // Revalidate the date field
            $('#eventForm').bootstrapValidator('revalidateField', 'date');
        });

    $('#eventForm').bootstrapValidator({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        
            date: {
                validators: {
                    notEmpty: {
                        message: 'The date is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        message: 'The date is not a valid'
                    }
                }
            }
        });
    });

}])