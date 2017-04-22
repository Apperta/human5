myapp.controller('th5Ctrl', ['$scope', '$state', '$stateParams', '$localStorage', 
  function ($scope, $state, $stateParams, $localStorage )
  {

    $(".notValid").hide();
    $(".notChosen").hide();
    $(".notSelected").hide();
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();

    $scope.WEMWBS = ([{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0},{va1:0,val2:0,val3:0,val4:0,val5:0,val6:0,val7:0}]);
    if($localStorage.WEMWBS != null)
      $scope.WEMWBS = $localStorage.WEMWBS;

    $scope.selfRateList = ([{mind:0, movement: 0, nutrition: 0, world:0, body:0}, {mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0},{mind:0, movement: 0, nutrition: 0, world:0, body:0}]);
    if($localStorage.rateList != null)
      $scope.selfRateList = $localStorage.rateList;

    $scope.YDC  = ([{val:0},{val:0},{val:0},{val:0},{val:0}]);
    if($localStorage.YDC == null)
      $localStorage.YDC = $scope.YDC;


    $(document).ready(function () 
    {



      $( ".button-stable" ).each(function(index) 
      {
        $(this).click(function()
        {
              var length = $(this).attr("class").indexOf("question");
              var part1 = $(this).attr("class").substring(length, length + 17);
              for(var i = 1; i <= 5; i++)
              {
                // background-color: #008CBA;
                $("."+part1+i).removeAttr("style");
              }
              $("."+$(this).attr("class").substring(length, length + 18)).css("background-color"," #008CBA");
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
          }


          if ( submitOk == true )
          {  
            console.log(submitOk + " " + i + " " + valWEMWBS);
              if($scope.WEMWBS[($scope.WEMWBS.length) -1].date != (new Date()).toString())
              {
                  $scope.WEMWBS.push
                  ({
                      val1:parseInt(valWEMWBS[1]),
                      val2:parseInt(valWEMWBS[2]),
                      val3:parseInt(valWEMWBS[3]),
                      val4:parseInt(valWEMWBS[4]),
                      val5:parseInt(valWEMWBS[5]),
                      val6:parseInt(valWEMWBS[6]),
                      val7:parseInt(valWEMWBS[7]),
                      date: (new Date()).toString()
                  });
              }
              $localStorage.WEMWBS = $scope.WEMWBS;
              $(".notValid").hide();
              submitOk = false;
              $state.go('menu.goals');
          } 
          else
          {
              $(".notValid").show();
          }
    });


    $scope.goToPerformancePage= function () 
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
          body:parseInt($scope.fifthValue),
          date: (new Date()).toString()
        });

        $(".notValid").hide();
        $state.go('menu.performance');
      }

      $localStorage.rateList = $scope.selfRateList;
    };

    $scope.skipToPerformancePage = function()
    {
      $state.go('menu.performance');
    }

 
    $scope.goWEMWBSPage = function()
    {
      $scope.YDC = $localStorage.YDC;
      if ($localStorage.temp >= 0 && $localStorage.temp <= 50)
      {
            $scope.YDC.push
            ({
                val:parseInt($localStorage.temp),
                date: (new Date()).toString()
            });
            $(".notSelected").hide();
            $state.go('menu.wEMWBS');
            $localStorage.YDC = $scope.YDC;
      }
      else
      {
         $(".notSelected").show();
      }
  
    }

    $scope.skipToWEMWBSPage= function()
    {
       $state.go('menu.wEMWBS');
    }




  nv.addGraph(function() 
  {
    var chart = nv.models.lineChart()
                  .margin({left: 20, top:20})
                  .useInteractiveGuideline(true)  
                  .showLegend(false)       
                  .showYAxis(false)        
                  .showXAxis(true);        

    chart.xAxis     //Chart x-axis settings
         .tickFormat(d3.format(',r'))
         .ticks(5);
   
    chart.yAxis     //Chart y-axis settings
        .tickFormat(d3.format('.02f'))
        .tickPadding(10);

    var data = generatePoints();        //Set up data
    var svg = d3.select('svg');    //Select the <svg> element you want to render the chart in.   

    svg.append("linearGradient")
    .attr("id", "temperature-gradient")
    .attr("gradientUnits", "userSpaceOnUse")
    .selectAll("stop")
    .data([
      {offset: "0%", color: "steelblue"},
      {offset: "30%", color: "green"},
      {offset: "50%", color: "yellow"},
      {offset: "100%", color: "red"}
      ])
    .enter().append("stop")
    .attr("offset", function(d) { return d.offset; })
    .attr("stop-color", function(d) { return d.color; });

      svg.datum(data)         //Populate the <svg> element with chart data...
      .attr("class", "xAxis")
      .attr("class", "axisLabel")
      .attr("class", "bg")
      .call(chart);          //Finalldy, render the chart!

  svg.on("click", function()
    {
        chart.tooltip.hidden(false);

        if($(".x-value")[0].innerHTML)
        {
          var stressVal = Number($(".x-value")[0].innerHTML);
        }
        if (stressVal < 10) 
        {
          var str = "inactive";
          var col = "steelblue";
        }
        else if (stressVal < 20) 
        {
          var str = "laidback";
          var col = "green";
        }
        else if (stressVal < 30) 
        {
          var str = "fatigue";
          var col = "lightgreen";
        }
        else if (stressVal < 40) 
        {
          var str = "exhaustion";
          var col = "yellow";
        } 
        else if (stressVal <50) 
        {
          var str = "anxiety/panic/anger";
          var col = "orange";
        } 
        else 
        {
          var str = "breakdown";
          var col = "red";
        } 

        $(".key")[0].innerHTML = str;
        var legendBox = d3.select(".legend-color-guide div");
        
        legendBox.style("background-color", col);  


        // if(parseInt((d3.mouse(this)[0] - 22 )/ 6.16) < 18)
        // console.log( parseInt((d3.mouse(this)[0] - 22 )/ 6.16));   

        if($("#lineChose").length)
        {
            $("#lineChose").remove();
        }
        
        svg.append("line")
           .attr("x1", function()
            {
              return d3.mouse(this)[0];
            })
           .attr("y1", "0")
           .attr("x2", function()
            {
              return d3.mouse(this)[0];
            })
           .attr("y2", "423")
           .attr("class", "xAxis")
           .attr("class", "axisLabel")
           .attr("class", "bg")
           .attr("id", "lineChose")
           .style("stroke-width", "2")
           .style("stroke", "rgb(0,0,0)");

           // $localStorage.temp = stressVal;
           $localStorage.temp = parseInt((d3.mouse(this)[0] - 22 )/ 6.16);
    });

    nv.utils.windowResize(function() { chart.update() });
    return chart;
  });


function generatePoints()
{
  var res = [];
  for (var i = 0; i < 51; i++) 
      res.push({x: i, y: Math.sin(i/16)});
  
  return [{
              values: res,
              key: 'Stress Level',
              color: 'temperature-gradient',
              area: true      
         }];
}


}])





