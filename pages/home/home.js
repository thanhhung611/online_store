(function(){
	angular.module('OnlineStore')
		.controller('HomeController',['$http','$scope',function($http,$scope){


			$http.get('./json/swiper.json').success(function(response){
				$scope.swipers = response;
				
			});
			$scope.myInterval = 3000;

			$http.get('./json/product.json').success(function(data){
				$scope.products = data;

			});
			$scope.hoverIn = function(item){
				item.hoverEdit = true;
			};
			$scope.hoverOut = function(item){
				item.hoverEdit = false;
			};

		}]);
})();