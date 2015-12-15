(function(){
	angular.module('OnlineStore')
		.controller('HomeController',['$http','$scope',function($http,$scope){
			$scope.myInterval = 3000;
			$http.get('./json/swiper.json').success(function(data){
				$scope.swipers = data;
			});
		}]);
})();