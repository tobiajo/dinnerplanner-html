dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {

	$scope.status = null;
	$scope.dish = null;

	$scope.getDish = function() {
	  	$scope.status = "Searching...";
	  	Dinner.Dish.get({id:$routeParams.dishId},function(data){
	  		$scope.status = data.Title;
	  		$scope.dish = data;
	  		$scope.dish.Price = Dinner.getDishPrice($scope.dish);
	  	},function(data){
	  		$scope.status = "There was an error";
	  	});
	}

	$scope.addToMenu = function() {
		if ($scope.dish !== null) {
			Dinner.addDishToMenu($scope.dish);
		}
	}
});
