// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {
  
  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case

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
