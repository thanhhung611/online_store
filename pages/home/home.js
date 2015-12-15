(function(){
	angular.module('OnlineStore')
		.controller('HomeController',['$http','$scope',function($http,$scope){
<<<<<<< HEAD

			$http.get('./json/swiper.json').success(function(response){
				$scope.swipers = response;
				
			});
			$scope.myInterval = 3000;

			$http.get('./json/product.json').success(function(data){
				$scope.products = data;
			
=======
			$http.get('./json/swiper.json').success(function(data){
				$scope.swipers = data;
			});	
			$scope.myInterval = 3000;
			$http.get('./json/product.json').success(function(data){
				$scope.products = data;
>>>>>>> origin/master
			});
		}]);
})();