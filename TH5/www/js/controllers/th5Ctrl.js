myapp.controller('th5Ctrl', ['$scope', '$state', '$stateParams',
  function ($scope, $state, $stateParams)
  {
    $scope.thfRate = function()
    {
      console.log($scope.firstValue + " " + $scope.secondValue + " " + $scope.thirdValue + " " + $scope.fourthValue + " " + $scope.fifthValue);
      // $cordovaFile.writeFile( 'file.txt', $scope.firstValue, {'append':true} ).then( function(result) {
      // Success!
      // }, function(err)
      // {
      //   // An error occured. Show a message to the user
      // });
    }


  }])

