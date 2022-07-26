var app = angular.module('ngclickApp1', []);
	app.controller('ngclickCtrl1', function ($scope) {
	$scope.clkcount1 = 0;
	$scope.getdetails1 = function () {
	$scope.clkcount1 = $scope.clkcount1 + 1;
	}
	});