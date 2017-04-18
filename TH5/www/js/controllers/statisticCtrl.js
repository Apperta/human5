myapp.controller('statisticCtrl', ['$scope', '$state', '$stateParams', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $stateParams, $localStorage) {
    // var Highcharts = require('highcharts');
    $(document).ready(function()
    {
        defaultCase();
    });

    $('select').on('change', function()
    {
        var optionSelected = $("option:selected", this);
        var caseVal = this.value;


        switch(caseVal)
        {
            case "1":
                fiveDays();
                break;

            case "2":
                fiveWeeks();
                break;
            
            default:
                defaultCase();
        }

    });
    

    function defaultCase()
    {
        var it = $localStorage.rateList.length;
        var it1 = $localStorage.YDC.length;
        var it2 = $localStorage.WEMWBS.length;

        var categories0 = ["Rate " + (it - 5)  , "Rate " + (it - 4) , "Rate " + (it - 3) , "Rate " + (it - 2) , "Rate " + (it - 1) ];
        var categories01 = ["Rate " + (it1 - 5)  , "Rate " + (it1 - 4) , "Rate " + (it1 - 3) , "Rate " + (it1 - 2) , "Rate " + (it1 - 1) ];
        var categories02 = ["Rate " + (it2 - 5)  , "Rate " + (it2 - 4) , "Rate " + (it2 - 3) , "Rate " + (it2 - 2) , "Rate " + (it2 - 1) ];
        

        var valMind      = [$localStorage.rateList[it-5].mind, $localStorage.rateList[it-4].mind, $localStorage.rateList[it-3].mind, $localStorage.rateList[it-2].mind, $localStorage.rateList[it-1].mind];
        var valMovement  = [$localStorage.rateList[it-5].movement, $localStorage.rateList[it-4].movement, $localStorage.rateList[it-3].movement, $localStorage.rateList[it-2].movement, $localStorage.rateList[it-1].movement];
        var valNutrition = [$localStorage.rateList[it-5].nutrition, $localStorage.rateList[it-4].nutrition, $localStorage.rateList[it-3].nutrition, $localStorage.rateList[it-2].nutrition, $localStorage.rateList[it-1].nutrition];
        var valWorld     = [$localStorage.rateList[it-5].world, $localStorage.rateList[it-4].world, $localStorage.rateList[it-3].world, $localStorage.rateList[it-2].world, $localStorage.rateList[it-1].world];
        var valBody      = [$localStorage.rateList[it-5].body, $localStorage.rateList[it-4].body, $localStorage.rateList[it-3].body, $localStorage.rateList[it-2].body, $localStorage.rateList[it-1].body];
       
        var dataYDC = [ $localStorage.YDC[it1-5].val,$localStorage.YDC[it1-4].val,$localStorage.YDC[it1-3].val,$localStorage.YDC[it1-2].val,$localStorage.YDC[it1-1].val];

        var dataWEMBWBS =   
            [  
                $localStorage.WEMWBS[it2-5].val1+ $localStorage.WEMWBS[it2-5].val2 + $localStorage.WEMWBS[it2-5].val3 + $localStorage.WEMWBS[it2-5].val4 +$localStorage.WEMWBS[it2-5].val5,
                $localStorage.WEMWBS[it2-4].val1+ $localStorage.WEMWBS[it2-4].val2 + $localStorage.WEMWBS[it2-4].val3 + $localStorage.WEMWBS[it2-4].val4 +$localStorage.WEMWBS[it2-4].val5,
                $localStorage.WEMWBS[it2-3].val1+ $localStorage.WEMWBS[it2-3].val2 + $localStorage.WEMWBS[it2-3].val3 + $localStorage.WEMWBS[it2-3].val4 +$localStorage.WEMWBS[it2-3].val5,
                $localStorage.WEMWBS[it2-2].val1+ $localStorage.WEMWBS[it2-2].val2 + $localStorage.WEMWBS[it2-2].val3 + $localStorage.WEMWBS[it2-2].val4 +$localStorage.WEMWBS[it2-2].val5,
                $localStorage.WEMWBS[it2-1].val1+ $localStorage.WEMWBS[it2-1].val2 + $localStorage.WEMWBS[it2-1].val3 + $localStorage.WEMWBS[it2-1].val4 +$localStorage.WEMWBS[it2-1].val5
            ];

        THFChart(categories0, valMind, valMovement, valNutrition, valWorld, valBody);
        YDCGraph(categories01, dataYDC);
        WEMBWBS(categories02, dataWEMBWBS);
    }



        function fiveDays()
    {
        var currentDate = new Date();
        var it = $localStorage.rateList.length;
        var it1 = $localStorage.YDC.length;
        var it2 = $localStorage.WEMWBS.length;

        var categories0 = 
            [
                'Day ' + (currentDate.getDate() -4) + '/' + currentDate.getMonth(), 
                'Day ' + (currentDate.getDate() -3) + '/' + currentDate.getMonth(), 
                'Day ' + (currentDate.getDate() -2) + '/' + currentDate.getMonth(), 
                'Day ' + (currentDate.getDate() -1) + '/' + currentDate.getMonth(), 
                'Day ' + (currentDate.getDate()   ) + '/' + currentDate.getMonth()
            ];

        
        var valMind      = [];
        var valMovement  = [];
        var valNutrition = [];
        var valWorld     = [];
        var valBody      = [];

        for( j=4; j>=0; j--)
        {
            var valMo = 0, valMi =0, valN =0, valW =0, valB =0;
            var colectAllValuesHere = [];

            for(i=0; i < it; i++)
            {
                var tempDay = new Date($localStorage.rateList[i].date).getDate(); 
                if ( tempDay == (currentDate.getDate() - j))
                {
                        colectAllValuesHere.push(i);
                }
            }

            for(k = 0 ; k < colectAllValuesHere.length; k++)
            {
                valMi += $localStorage.rateList[colectAllValuesHere[k]].mind; 
                valMo += $localStorage.rateList[colectAllValuesHere[k]].movement; 
                valN  += $localStorage.rateList[colectAllValuesHere[k]].nutrition; 
                valW  += $localStorage.rateList[colectAllValuesHere[k]].world; 
                valB  += $localStorage.rateList[colectAllValuesHere[k]].body; 
                
            }

            valMind.push(valMi / colectAllValuesHere.length);
            valMovement.push(valMo / colectAllValuesHere.length);
            valNutrition.push(valN / colectAllValuesHere.length);
            valWorld.push(valW / colectAllValuesHere.length);
            valBody.push(valB / colectAllValuesHere.length);
        }




        var dataYDC = [];
        for( j=4; j>=0; j--)
        {
            var valTotal = 0;
            var colectAllValuesHere = [];

            for(i=0; i < it1; i++)
            {
                var tempDay = new Date($localStorage.YDC[i].date).getDate(); 
                if ( tempDay == (currentDate.getDate() - j))
                {
                        colectAllValuesHere.push(i);
                }
            }

            for(k = 0 ; k < colectAllValuesHere.length; k++)
            {
                valTotal += $localStorage.YDC[colectAllValuesHere[k]].val; 
                
            }

            dataYDC.push(valTotal / colectAllValuesHere.length);
        }


        var dataWEMBWBS = [];
        for( j=4; j>=0; j--)
        {
            var valTotal = 0;
            var colectAllValuesHere = [];

            for(i=0; i < it2; i++)
            {
                var tempDay = new Date($localStorage.WEMWBS[i].date).getDate(); 
                if ( tempDay == (currentDate.getDate() - j))
                {
                        colectAllValuesHere.push(i);
                }
            }

            for(k = 0 ; k < colectAllValuesHere.length; k++)
            {
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val1; 
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val2; 
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val3; 
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val4; 
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val5;     
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val6;     
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val7;     
            }

            dataWEMBWBS.push(valTotal / colectAllValuesHere.length);
        }

        THFChart(categories0, valMind, valMovement, valNutrition, valWorld, valBody);
        YDCGraph(categories0, dataYDC);
        WEMBWBS (categories0, dataWEMBWBS);
    }

       function fiveWeeks()
    {
        var currentDate = new Date();
        var it = $localStorage.rateList.length;
        var it1 = $localStorage.YDC.length;
        var it2 = $localStorage.WEMWBS.length;


        var categories0 = 
            [
                'Week ' + (currentDate.getWeek() -4), 
                'Week ' + (currentDate.getWeek() -3),
                'Week ' + (currentDate.getWeek() -2),
                'Week ' + (currentDate.getWeek() -1),
                'Week ' + (currentDate.getWeek()   )
            ];
        var valMind      = [];
        var valMovement  = [];
        var valNutrition = [];
        var valWorld     = [];
        var valBody      = [];

        for( j=4; j>=0; j--)
        {
            var valMo = 0, valMi =0, valN =0, valW =0, valB =0;
            var colectAllValuesHere = [];

            for(i=0; i < it; i++)
            {
                var tempDay = new Date($localStorage.rateList[i].date).getWeek();
                console.log(tempDay + " == " + (currentDate.getWeek() - j) + " " + i); 
                if ( tempDay == (currentDate.getWeek() - j))
                {
                        colectAllValuesHere.push(i);
                }
            }

            for(k = 0 ; k < colectAllValuesHere.length; k++)
            {
                valMi += $localStorage.rateList[colectAllValuesHere[k]].mind; 
                valMo += $localStorage.rateList[colectAllValuesHere[k]].movement; 
                valN  += $localStorage.rateList[colectAllValuesHere[k]].nutrition; 
                valW  += $localStorage.rateList[colectAllValuesHere[k]].world; 
                valB  += $localStorage.rateList[colectAllValuesHere[k]].body; 
                
            }

            valMind.push(valMi / colectAllValuesHere.length);
            valMovement.push(valMo / colectAllValuesHere.length);
            valNutrition.push(valN / colectAllValuesHere.length);
            valWorld.push(valW / colectAllValuesHere.length);
            valBody.push(valB / colectAllValuesHere.length);
        }




        var dataYDC = [];
        for( j=4; j>=0; j--)
        {
            var valTotal = 0;
            var colectAllValuesHere = [];

            for(i=0; i < it1; i++)
            {
                var tempDay = new Date($localStorage.YDC[i].date).getWeek(); 
                if ( tempDay == (currentDate.getWeek() - j))
                {
                        colectAllValuesHere.push(i);
                }
            }

            for(k = 0 ; k < colectAllValuesHere.length; k++)
            {
                valTotal += $localStorage.YDC[colectAllValuesHere[k]].val; 
                
            }

            dataYDC.push(valTotal / colectAllValuesHere.length);
        }


        var dataWEMBWBS = [];
        for( j=4; j>=0; j--)
        {
            var valTotal = 0;
            var colectAllValuesHere = [];

            for(i=0; i < it2; i++)
            {
                var tempDay = new Date($localStorage.WEMWBS[i].date).getWeek(); 
                if ( tempDay == (currentDate.getWeek() - j))
                {
                        colectAllValuesHere.push(i);
                }
            }

            for(k = 0 ; k < colectAllValuesHere.length; k++)
            {
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val1; 
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val2; 
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val3; 
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val4; 
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val5;     
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val6;     
                valTotal += $localStorage.WEMWBS[colectAllValuesHere[k]].val7;     
            }

            dataWEMBWBS.push(valTotal / colectAllValuesHere.length);
        }

        THFChart(categories0, valMind, valMovement, valNutrition, valWorld, valBody);
        YDCGraph(categories0, dataYDC);
        WEMBWBS (categories0, dataWEMBWBS);
    }

    function THFChart(category, valMind, valMovement, valNutrition, valWorld, valBody)
    {    
        var it = $localStorage.rateList.length;

        $('#columnCanvas').highcharts({
            chart: {
                type: 'column',
                zoomType: 'xy'
            },
            title: {
                text: 'The Human Five'
            },
            xAxis: {
                categories: category
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Ratings'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            // Design description on the chart
            legend: {
                align: 'right',
                x: 0,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 0.5,
                shadow: true
            },
            // Description displayed when graph (bar) is clicked
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: 'Mind',
                data: valMind
            }, {
                name: 'Movement',
                data: valMovement
            }, {
                name: 'Nutrition',
                data: valNutrition
            }, {
                name: 'World',
                data: valWorld
            }, {
                name: 'Body',
                data: valBody
            }]
        });
    }


    // Yerkes Dodson Curve Graph
    function YDCGraph(category, dataPerformance)
    {



        var performanceValues = {

            10: 'Inefficient',
            20: 'Sub Par',
            30: 'Par',
            40: 'Productive',
            50: 'Efficicent'
        };
        var stressLevels = {

            10: 'Too Low',
            20: 'Low',
            30: 'Optimum',
            40: 'High',
            50: 'Too High'
        };

        $('#areaCanvas').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Yerkes - Dodson Stress Performance Curve'
            },
            xAxis: [{
                categories: category, 
                crosshair: true
            }],
            yAxis: [{ 
                labels: {
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    },
                    // Matches the custom Y-Axis Values from stressLevels
                    formatter: function() {
                        var StressValue = stressLevels[this.value];
                        return StressValue !== 'undefined' ? StressValue : this.value;
                    }
                },
                title: {
                    text: 'Stress',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },

                max: 50
            }, { // Secondary yAxis
                title: {
                    text: 'Performance',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                max: 50,

                labels: {
                    // Matches the custom Y-Axis Values from performanceValues
                    formatter: function() {
                        var performanceValue = performanceValues[this.value];
                        return performanceValue !== 'undefined' ? performanceValue : this.value;
                    },
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                // The 2 y-axis are displayed on different ends
                opposite: true
            }],
            // Description displayed when graph (line or bar) is clicked is common for both data sets
            tooltip: {
                shared: true
            },
            // Design description on the chart
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 70,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Performance',
                type: 'column',
                yAxis: 1,
                data: dataPerformance

            }]
        });
    }




    
    
    // Warwick Edinburgh Stress Performance Curve Graph
    function WEMBWBS(categories, dataWEMBWBS)
    {
        $('#lineCanvas').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Warwick-Edinburgh Mental Well Being Score'
            },
            subtitle: {
                text: 'WEMWBS'
            },
            xAxis: [{
                categories: categories,
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Score',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                max: 35,
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 70,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Score (Columns)',
                type: 'column',
                // yAxis: 1,
                data: dataWEMBWBS
            }]
        });
    }

}])



/*  
    Functions that add two methods to date class so we can get the week number
    First  - Returns the ISO week of the date.
    Second - Returns the four-digit year corresponding to the ISO week of the date.
*/
Date.prototype.getWeek = function() 
{
      var date = new Date(this.getTime());
      date.setHours(0, 0, 0, 0);
      var week1 = new Date(date.getFullYear(), 0, 4);
      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

Date.prototype.getWeekYear = function() 
{
      var date = new Date(this.getTime());
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
      return date.getFullYear();
}