myapp.controller('th5Ctrl', ['$scope', '$state', '$stateParams', '$localStorage', 
  function ($scope, $state, $stateParams, $localStorage )
  {
    $(".notValid").hide();
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();


    $scope.selfRateList = ([{mind:0, movement: 0, nutrition: 0, world:0, body:0}, {mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0}]);
    if($localStorage.rateList != null)
    $scope.selfRateList = $localStorage.rateList;

    $scope.addSelfRate= function () 
    {

        if( !$scope.firstValue && !$scope.secondValue && !$scope.thirdValue && !$scope.fourthValue && !$scope.fifthValue)
        {
            $(".notValid").show();
        }
        else
        {
            $scope.selfRateList.push
            ({
                mind:parseInt($scope.firstValue),
                movement:parseInt($scope.secondValue),
                nutrition:parseInt($scope.thirdValue),
                world:parseInt($scope.fourthValue),
                body:parseInt($scope.fifthValue)
            });
            
            $(".notValid").hide();
            $state.go('home.performance');
        }

        $localStorage.rateList = $scope.selfRateList;
    };

    $scope.goPerformancePage = function()
    {
        $state.go('home.performance');
    }

    $("#p1g").click(function()
    {
          $("#p1").hide();
          $("#p2").show();
          $("#p3").show();
          $("#p4").show();
          $("#p1g").show();
          $("#p2g").hide();
          $("#p3g").hide();
          $("#p4g").hide();
    });

     $("#p1").click(function()
    {
          $("#p1").hide();
          $("#p2").show();
          $("#p3").show();
          $("#p4").show();
          $("#p1g").show();
          $("#p2g").hide();
          $("#p3g").hide();
          $("#p4g").hide();
    });;

     $("#p2g").click(function()
    {
          $("#p1").show();
          $("#p2").hide();
          $("#p3").show();
          $("#p4").show();
          $("#p1g").hide();
          $("#p2g").show();
          $("#p3g").hide();
          $("#p4g").hide();
    });

     $("#p2").click(function()
    {
          $("#p1").show();
          $("#p2").hide();
          $("#p3").show();
          $("#p4").show();
          $("#p1g").hide();
          $("#p2g").show();
          $("#p3g").hide();
          $("#p4g").hide();
    });;


    $("#p3g").click(function()
    {
          $("#p1").show();
          $("#p2").show();
          $("#p3").hide();
          $("#p4").show();
          $("#p1g").hide();
          $("#p2g").hide();
          $("#p3g").show();
          $("#p4g").hide();
    });

     $("#p3").click(function()
    {
          $("#p1").show();
          $("#p2").show();
          $("#p3").hide();
          $("#p4").show();
          $("#p1g").hide();
          $("#p2g").hide();
          $("#p3g").show();
          $("#p4g").hide();
    });;


    $("#p4g").click(function()
    {
          $("#p1").show();
          $("#p2").show();
          $("#p3").show();
          $("#p4").hide();
          $("#p1g").hide();
          $("#p2g").hide();
          $("#p3g").hide();
          $("#p4g").show();
    });

     $("#p4").click(function()
    {
          $("#p1").show();
          $("#p2").show();
          $("#p3").show();
          $("#p4").hide();
          $("#p1g").hide();
          $("#p2g").hide();
          $("#p3g").hide();
          $("#p4g").show();
    });;



  }])

