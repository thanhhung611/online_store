(function(){
	angular.module('OnlineStore')
		.controller('HomeController',['$http','$scope',function($http,$scope){
<<<<<<< HEAD
			$scope.myInterval = 3000;
			$http.get('./json/swiper.json').success(function(data){
				$scope.swipers = data;
=======
			$http.get('./json/product.json').success(function(data){
				$scope.products = data;
>>>>>>> origin/master
			});
		}]);
})();