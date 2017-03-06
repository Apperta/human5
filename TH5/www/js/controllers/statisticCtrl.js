myapp.controller('statisticCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	// var Highcharts = require('highcharts');

	$(function(){
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
				data: [5, 5, 5, 5, 5]
			}, {
				name: 'Movement',
				data: [5, 2, 3, 2, 1]
			}, {
				name: 'Nutrition',
				data: [5, 4, 4, 2, 5]
			}, {
				name: 'World',
				data: [5, 2, 4, 2, 6]
			}, {
				name: 'Body',
				data: [5, 1, 3, 2, 1]
			}]
		});
	})

	var performanceValues = {

		1: 'Inefficient',
		2: 'Sub Par',
		3: 'Par',
		4: 'Productive',
		5: 'Efficicent'
	};

	var stressLevels = {
		1: 'Too Low',
		2: 'Low',
		3: 'Optimum',
		4: 'High',
		5: 'Too High'
	};

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
					formatter: function() {
						var performanceValue = performanceValues[this.value];
						return performanceValue !== 'undefined' ? performanceValue : this.value;
					},
					style: {
						color: Highcharts.getOptions().colors[0]
					}
				},
				opposite: true
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






	$(function(){
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
					// format: '{value}°C',
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
				data: [24, 13, 32, 9, 22]
			}, {
				name: 'Score (Line)',
				type: 'spline',
				data: [24, 13, 32, 9, 22],
			}]
		});
	})

}])
