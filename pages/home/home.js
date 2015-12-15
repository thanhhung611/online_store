(function(){
	angular.module('OnlineStore')
		.controller('HomeController',['$http','$scope',function($http,$scope){
			$http.get('./json/product.json').success(function(data){
				$scope.products = data;
			});
		}]);
})();