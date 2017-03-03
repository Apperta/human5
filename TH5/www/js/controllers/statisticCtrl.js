myapp.controller('statisticCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  /* Other questions chart */
    var chartFor = function(){

        $(function () {
            $('#other-chart').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Other questions summery'
                },
                subtitle: {
                    text: 'Taking from ' + $rootScope.quizCount + ' survey samples'
                },
                xAxis: {
                    categories:$rootScope.labels,
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Answers'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormatter: function() {
                        return '<tr><td style="color:'+this.series.color+';padding:0">'+this.series.name+': </td>' +
                        '<td style="padding:0"><b>'+this.y.toFixed(1)+'</b></td></tr>'+
                        $rootScope.ansNotes[this.x]
                    },
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Answer',
                    data: $rootScope.data

                }]
            });
        });

    }; // Chart for function
}])