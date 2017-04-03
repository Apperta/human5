myapp.controller('statisticCtrl', ['$scope', '$state', '$stateParams', '$localStorage', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $stateParams, $localStorage) {
    // var Highcharts = require('highcharts');

    // The Human Five Chart
    $(function(){

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
                categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri']
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
                data: [$localStorage.rateList[it-5].mind, $localStorage.rateList[it-4].mind, $localStorage.rateList[it-3].mind, $localStorage.rateList[it-2].mind, $localStorage.rateList[it-1].mind]
            }, {
                name: 'Movement',
                data: [$localStorage.rateList[it-5].movement, $localStorage.rateList[it-4].movement, $localStorage.rateList[it-3].movement, $localStorage.rateList[it-2].movement, $localStorage.rateList[it-1].movement]
            }, {
                name: 'Nutrition',
                data: [$localStorage.rateList[it-5].nutrition, $localStorage.rateList[it-4].nutrition, $localStorage.rateList[it-3].nutrition, $localStorage.rateList[it-2].nutrition, $localStorage.rateList[it-1].nutrition]
            }, {
                name: 'World',
                data: [$localStorage.rateList[it-5].world, $localStorage.rateList[it-4].world, $localStorage.rateList[it-3].world, $localStorage.rateList[it-2].world, $localStorage.rateList[it-1].world]
            }, {
                name: 'Body',
                data: [$localStorage.rateList[it-5].body, $localStorage.rateList[it-4].body, $localStorage.rateList[it-3].body, $localStorage.rateList[it-2].body, $localStorage.rateList[it-1].body]
            }]
        });
    })

    // Y-Axis Values for Performance
    var performanceValues = {

        1: 'Inefficient',
        2: 'Sub Par',
        3: 'Par',
        4: 'Productive',
        5: 'Efficicent'
    };

    // Y-Axis Values for Stress
    var stressLevels = {

        1: 'Too Low',
        2: 'Low',
        3: 'Optimum',
        4: 'High',
        5: 'Too High'
    };

    // Yerkes Dodson Curve Graph
    $(function(){
        $('#areaCanvas').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Yerkes - Dodson Stress Performance Curve'
            },
            xAxis: [{
                categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
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

                max: 5
            }, { // Secondary yAxis
                title: {
                    text: 'Performance',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                max: 5,

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
                data: [1, 1, 1, 5, 5]

            }, {
                name: 'Stress',
                type: 'spline',
                data: [5, 1, 1, 3, 3]
            }]
        });
    })




    
    
    // Warwick Edinburgh Stress Performance Curve Graph
    $(function(){
        var it2 = $localStorage.WEMWBS.length;
        console.log($localStorage.WEMWBS);
        console.log($localStorage.WEMWBS[it2-5].val1+ $localStorage.WEMWBS[it2-5].val2 + $localStorage.WEMWBS[it2-5].val3 + $localStorage.WEMWBS[it2-5].val4 +$localStorage.WEMWBS[it2-5].val5);
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
                categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
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
            // Description displayed when graph (line or bar) is clicked
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
                name: 'Score (Columns)',
                type: 'column',
                // yAxis: 1,
                data: [
                $localStorage.WEMWBS[it2-5].val1+ $localStorage.WEMWBS[it2-5].val2 + $localStorage.WEMWBS[it2-5].val3 + $localStorage.WEMWBS[it2-5].val4 +$localStorage.WEMWBS[it2-5].val5,
                $localStorage.WEMWBS[it2-4].val1+ $localStorage.WEMWBS[it2-4].val2 + $localStorage.WEMWBS[it2-4].val3 + $localStorage.WEMWBS[it2-4].val4 +$localStorage.WEMWBS[it2-4].val5,
                $localStorage.WEMWBS[it2-3].val1+ $localStorage.WEMWBS[it2-3].val2 + $localStorage.WEMWBS[it2-3].val3 + $localStorage.WEMWBS[it2-3].val4 +$localStorage.WEMWBS[it2-3].val5,
                $localStorage.WEMWBS[it2-2].val1+ $localStorage.WEMWBS[it2-2].val2 + $localStorage.WEMWBS[it2-2].val3 + $localStorage.WEMWBS[it2-2].val4 +$localStorage.WEMWBS[it2-2].val5,
                $localStorage.WEMWBS[it2-1].val1+ $localStorage.WEMWBS[it2-1].val2 + $localStorage.WEMWBS[it2-1].val3 + $localStorage.WEMWBS[it2-1].val4 +$localStorage.WEMWBS[it2-1].val5
                ]
            }, {
                name: 'Score (Line)',
                type: 'spline',
                data: [24, 13, 32, 9, 22],
            }]
        });
    })
}])