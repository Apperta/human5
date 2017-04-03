myapp.controller('th5Ctrl', ['$scope', '$state', '$stateParams', '$localStorage', 
  function ($scope, $state, $stateParams, $localStorage )
  {

    $(".notValid").hide();
    $(".notChosen").hide();
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();


    $scope.WEMWBS = ([{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0}]);
    if($localStorage.WEMWBS != null)
      $scope.WEMWBS = $localStorage.WEMWBS;

    $(document).ready(function () 
    {
      $( ".button-stable" ).each(function(index) {
      
        // console.log( $(".question"+i+"-button-"+j).val());
        $(this).click(function()
        {
              var length = $(this).attr("class").indexOf("question");
              var part1 = $(this).attr("class").substring(length, length + 17);
              for(var i = 1; i <= 5; i++)
              {
                // background-color: #008CBA;
                $("."+part1+i).removeAttr("style");
                // console.log($("." + part1 + i).attr("class")+ " " + part1+i);
                // console.log($(".question1-button-3").attr("class"));
              }
              // console.log($($(this).attr("class").substring(length, length + 18)).css());
              $("."+$(this).attr("class").substring(length, length + 18)).css("background-color"," #008CBA");
              console.log($(this).attr("class").substring(length, length + 18) + " " + $(this).val());
        });
      });
    });

    $("#wEMWBS-button9").click(function()
    {
      var temp  = ".question";
      var temp2 = "-button-";
      var ok = false;
      var submitOk = true;
      var valWEMWBS = [];

      for(i = 1 ; i <= 7; i++)
      {
        ok = false;
        for(j = 1 ; j <= 5; j++)
        {
          // console.log($(temp+i+temp2+j).attr("style") + " " + $(temp+i+temp2+j).attr("style") != null)
          if ($(temp+i+temp2+j).attr("style") != undefined)
          {
            valWEMWBS[i]= $(temp+i+temp2+j).val();
            ok = true;
          }
        }

        if ( ok == false )
        {
          submitOk = false;
        }
        // console.log(ok+ " " + i);
      }


      if ( submitOk == true )
      {  
        console.log(submitOk + " " + i + " " + valWEMWBS);

          $scope.WEMWBS.push
          ({
              val1:parseInt(valWEMWBS[1]),
              val2:parseInt(valWEMWBS[2]),
              val3:parseInt(valWEMWBS[3]),
              val4:parseInt(valWEMWBS[4]),
              val5:parseInt(valWEMWBS[5]),
              val6:parseInt(valWEMWBS[6]),
              val7:parseInt(valWEMWBS[7])
          });
          $localStorage.WEMWBS = $scope.WEMWBS;
          $(".notValid").hide();
          $state.go('menu.goals');
      } 
      else
      {
          $(".notValid").show();
      }

    });

     $scope.it = 0;
     $scope.qs = ["I've been feeling optimistic about the future", "I've been feeling useful", "I've been feeling relaxed", "I've been dealing with my problems well","I've been thinking clearly",  "I've been feeling close to other people", "I've been able to make up my own mind"];
     $scope.vs = ["1","2","3","4","5"];

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
            $ionicViewService.nextViewOptions({
              disableBack: true
            });
            $state.go('menu.performance');
        }

        $localStorage.rateList = $scope.selfRateList;
    };

    $scope.goPerformancePage = function()
    {
        $state.go('menu.performance');
    }

    $scope.goWEMWBSPage = function()
    {
        $state.go('menu.wEMWBS');
    }

  





    /*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */
nv.addGraph(function() {
  var chart = nv.models.lineChart()
                .margin({left: 30})  //Adjust chart margins to give the x-axis some breathing room.
                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                //.transitionDuration(350)  //how fast do you want the lines to transition?
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(false)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
  ;

  chart.xAxis     //Chart x-axis settings
      .axisLabel('Stress Level')
      .tickFormat(d3.format(',r'));

  chart.yAxis     //Chart y-axis settings
      //.axisLabel('Voltage (v)')
      .tickFormat(d3.format('.02f'));

  /* Done setting the chart up? Time to render it!*/
  var myData = sinAndCos();   //You need data...

  d3.select('#chart svg')    //Select the <svg> element you want to render the chart in.   
      .datum(myData)         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;
});
/**************************************
 * Simple test data generator
 */
function sinAndCos() {
  var sin = [],sin2 = [],
      cos = [];

  //Data is represented as an array of {x,y} pairs.
  for (var i = 0; i < 32; i++) {
    sin.push({x: i, y: Math.sin(i/10)});
    sin2.push({x: i, y: Math.sin(i/10) *0.25 + 0.5});
    cos.push({x: i, y: .5 * Math.cos(i/10)});
  }

  //Line chart data should be sent as an array of series objects.
  return [
    // {
    //   values: sin,      //values - represents the array of {x,y} data points
    //   key: 'Sine Wave', //key  - the name of the series.
    //   color: '#ff7f0e'  //color - optional: choose your own line color.
    // },
    // {
    //   values: cos,
    //   key: 'Cosine Wave',
    //   color: '#2ca02c'
    // },
    {
      values: sin,
      key: 'Stress curve',
      color: 'green',
      area: true      //area - set to true if you want this line to turn into a filled area chart.
    }
  ];
}

  }])

